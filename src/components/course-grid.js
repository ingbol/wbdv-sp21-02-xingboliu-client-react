import React from 'react'
import {Link} from "react-router-dom";
import CourseCard from "./course-card";


export default class CourseGrid extends
    React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wbdv-container">
                <div className="row border-bottom wbdv-name-row">
                    <div className="col-5 d-none d-sm-block">
                        Recent Documents
                    </div>
                    <div className="col-6 d-none d-sm-block">
                        Owned by Me
                    </div>
                    <div className="col-1 text-nowrap">
                        <i className="fa fa-folder "></i>
                        <i className="fa fa-sort-alpha-up-alt "></i>
                        <Link to="/courses/table">
                            <i className="fa fa-bars"></i>
                        </Link>
                    </div>
                </div>

                <div className="row">
                    {
                        this.props.courses.map(course =>
                            <CourseCard
                                key={course._id}
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                course={course}
                                title={course.title}
                                lastModified={course.lastModified}
                                owner={course.owner}/>)
                    }
                </div>
            </div>)
    }
}


