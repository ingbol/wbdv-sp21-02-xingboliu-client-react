import React,{useState} from "react";
import {Link, Route} from "react-router-dom";
import courseService from "../services/course-sevice"
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor/course-editor";


export default class CourseManager
    extends React.Component {
    state = {
        courses: [],
    }

    title = ''

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if(c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    deleteCourse = (course) => {
        courseService.deleteCourse(course._id)
            .then(status => {
                this.setState(prevState => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
    }

    addCourse = () => {
        if(this.title === ''){
            this.title = 'New Course'
        }
        const newCourse = {
            title: this.title,
            owner: "me",
            lastModified: new Date().toISOString().split('T')[0]
        }
        courseService.createCourse(newCourse)
            .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            })
    }


    render() {

        return(
            <div className="wbdv-container">

                <Route path="/courses/table" exact={true} >
                    <div className="row wbdv-sticky-top wbdv-padding-5px">
                        <div className="col-1">
                            <i className="fa fa-bars fa-2x"></i>
                        </div>
                        <div className="col-3 d-none d-lg-block">
                            <h4>Course Manager</h4>
                        </div>
                        <div className="col-7">
                            <input className="form-control"
                                   placeholder="New Course Title"
                                   onChange={(e) => this.title = e.target.value}
                            />
                        </div>
                        <div className="col-1">
                            <i className="fa fa-plus-circle fa-2x" onClick={this.addCourse}></i>
                        </div>
                    </div>
                    <i className="fa fa-plus-circle fa-4x" onClick={this.addCourse}></i>
                    <br/>
                    <br/>

                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>

                </Route>

                <Route path="/courses/grid" exact={true} >
                    <div className="row wbdv-sticky-top wbdv-padding-5px">
                        <div className="col-1">
                            <i className="fa fa-bars fa-2x"></i>
                        </div>
                        <div className="col-3 d-none d-lg-block">
                            <h4>Course Manager</h4>
                        </div>
                        <div className="col-7">
                            <input className="form-control"
                                   placeholder="New Course Title"
                                   onChange={(e) => this.title = e.target.value}
                            />
                        </div>
                        <div className="col-1">
                            <i className="fa fa-plus-circle fa-2x" onClick={this.addCourse}></i>
                        </div>
                    </div>
                    <i className="fa fa-plus-circle fa-4x" onClick={this.addCourse}></i>
                    <br/>
                    <br/>

                    <CourseGrid courses={this.state.courses}
                                updateCourse={this.updateCourse}
                                deleteCourse={this.deleteCourse}/>
                </Route>

                <Route path={[
                    "/courses/:layout/edit/:courseId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"]}
                       exact={true}
                       render={(props) => <CourseEditor {...props}/>}>
                </Route>
            </div>
        )
    }
}

