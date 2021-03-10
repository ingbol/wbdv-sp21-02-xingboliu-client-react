import lessonService from "../../services/lesson-service";
import {useParams} from "react-router-dom";
import React, {useEffect} from 'react'
import EditableItem from "../editable-item";
import {connect} from "react-redux";

const LessonTabs = (
    {
        lessons = [],
        findLessonsForModule,
        createLesson,
        updateLesson,
        deleteLesson,
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        // if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
        //     findLessonsForModule(moduleId)
        // }
        findLessonsForModule(moduleId)
    }, [courseId, moduleId])

    return (
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                <li className="nav-item">
                    <EditableItem
                        active={lesson._id === lessonId}
                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                        updateItem={updateLesson}
                        deleteItem={deleteLesson}
                        item={lesson}
                    />
                </li>
                )
            }

                <li>
                    <i onClick={() => {
                        if(moduleId !== "undefined" && typeof moduleId !== "undefined")
                            createLesson(moduleId)}
                    }
                       className="fas fa-plus fa-2x"></i>
                </li>


        </ul>
    )
}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons
            }))
    },
    createLesson: (moduleId) => {
        lessonService.createLesson(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
               type:"CREATE_LESSON",
               lesson
            }))
    },
    updateLesson: (lesson) => {
        lessonService.updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                type:"UPDATE_LESSON",
                lesson
            }))
    },
    deleteLesson: (lesson) => {

        lessonService.deleteLesson(lesson._id)
            .then(status => dispatch({
                type:"DELETE_LESSON",
                lessonToDelete: lesson
            }))
    }
})

export default connect(stpm, dtpm)(LessonTabs)