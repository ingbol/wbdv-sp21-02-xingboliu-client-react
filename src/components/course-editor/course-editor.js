import {combineReducers, createStore} from "redux";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import moduleReducer from "../../reducers/module-reducer";
import {Provider} from "react-redux";
import {Link, Route, useParams} from "react-router-dom";
import React from "react";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import widgetReducer from "../../reducers/widget-reducer";
import WidgetList from "./widgets/widget-list";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

const store = createStore(reducer)

const CourseEditor = () =>{
    const {layout, courseId, moduleId, lessonId, topicId} = useParams()

    return (
        <Provider store={store}>
            <div>
                <h1>
                    <Link to={`/courses/${layout}`}>
                        <i className="fas fa-times" ></i>
                    </Link>

                    Web Dev Selected Course
                </h1>

                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                        <TopicPills/>
                        <WidgetList/>
                    </div>

                </div>
            </div>
        </Provider>


    )
}





export default CourseEditor