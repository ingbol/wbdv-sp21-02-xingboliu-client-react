import topicService from "../../services/topic-service";
import {useParams} from "react-router-dom";
import React, {useEffect} from 'react'
import EditableItem from "../editable-item";
import {connect} from "react-redux";

const TopicPills = (
    {
        topics = [],
        findTopicsForLesson,
        createTopic,
        updateTopic,
        deleteTopic,
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        // if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
        //     findTopicsForLesson(lessonId)
        // }
        findTopicsForLesson(lessonId)
    }, [moduleId, lessonId])

    return (
        <ul className="nav nav-pills">
            {
                topics.map(topic =>
                    <li className="nav-item">
                        <EditableItem
                            active={topic._id === topicId}
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                            updateItem={updateTopic}
                            deleteItem={deleteTopic}
                            item={topic}
                        />
                    </li>
                )
            }

            <li>
                <i onClick={() => {
                    if(lessonId !== "undefined" && typeof lessonId !== "undefined")
                        createTopic(lessonId)}
                }
                   className="fas fa-plus fa-2x"></i>
            </li>


        </ul>
    )
}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics
            }))
    },
    createTopic: (lessonId) => {
        topicService.createTopic(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type:"CREATE_TOPICS",
                topic
            }))
    },
    updateTopic: (topic) => {
        topicService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                type:"UPDATE_TOPIC",
                topic
            }))
    },
    deleteLesson: (topic) => {
        topicService.deleteTopic(topic._id)
            .then(status => dispatch({
                type:"DELETE_TOPIC",
                topicToDelete: topic
            }))
    }
})

export default connect(stpm, dtpm)(TopicPills)