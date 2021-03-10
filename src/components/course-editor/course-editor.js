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

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
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
                    </div>

                </div>


                {/*<div className="container">*/}

                {/*    <div className="row">*/}

                {/*        <div className="col-4 bg-dark pb-3">*/}

                {/*            <ul className="list-group">*/}
                {/*                <li className="list-group-item active mb-3 mt-3">*/}
                {/*                    Module 1 - jQuery*/}
                {/*                    <i className="pull-right fa fa-times"></i>*/}
                {/*                </li>*/}
                {/*                <li className="list-group-item bg-secondary mb-3">*/}
                {/*                    Module 2 - React*/}
                {/*                    <i className="pull-right fa fa-times"></i>*/}
                {/*                </li>*/}
                {/*                <li className="list-group-item bg-secondary mb-3">*/}
                {/*                    Module 3 - Redux*/}
                {/*                    <i className="pull-right fa fa-times"></i>*/}
                {/*                </li>*/}
                {/*                <li className="list-group-item bg-secondary mb-3">*/}
                {/*                    Module 4 - Native*/}
                {/*                    <i className="pull-right fa fa-times"></i>*/}
                {/*                </li>*/}
                {/*                <li className="list-group-item bg-secondary mb-3">*/}
                {/*                    Module 5 - Angular*/}
                {/*                    <i className="pull-right fa fa-times"></i>*/}
                {/*                </li>*/}
                {/*                <li className="list-group-item bg-secondary mb-3">*/}
                {/*                    Module 6 - Node*/}
                {/*                    <i className="pull-right fa fa-times"></i>*/}
                {/*                </li>*/}
                {/*                <li className="list-group-item bg-secondary mb-3">*/}
                {/*                    Module 7 - Mongo*/}
                {/*                    <i className="pull-right fa fa-times"></i>*/}
                {/*                </li>*/}
                {/*            </ul>*/}

                {/*        </div>*/}
                {/*        <div className="col-8">*/}

                {/*            <ul className="nav nav-pills mt-3">*/}
                {/*                <li className="nav-item bg-secondary mr-3 mb-3">*/}
                {/*                    <a className="nav-link text-light active" href="#">Topic 1</a>*/}
                {/*                </li>*/}
                {/*                <li className="nav-item bg-secondary mr-3 mb-3">*/}
                {/*                    <a className="nav-link text-light" href="#">Topic 2</a>*/}
                {/*                </li>*/}
                {/*                <li className="nav-item bg-secondary mr-3 mb-3">*/}
                {/*                    <a className="nav-link text-light" href="#">Topic 3</a>*/}
                {/*                </li>*/}
                {/*                <li className="nav-item bg-secondary mr-3 mb-3">*/}
                {/*                    <a className="nav-link text-light" href="#">Topic 4</a>*/}
                {/*                </li>*/}
                {/*                <li className="nav-item bg-secondary mr-3 mb-3">*/}
                {/*                    <a className="nav-link text-light" href="#">*/}
                {/*                        <i className="fa fa-plus"></i>*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </Provider>


    )
}





export default CourseEditor