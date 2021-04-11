import React from "react";
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends
    React.Component{

        constructor(props) {
            super(props);
        }

        render() {
            return(
                <div className="wbdv-container">
                    <div className="row border-bottom">
                        <div className="col-3">
                            Title
                        </div>
                        <div className="col-3 d-none d-sm-block">
                            Owned by
                            <i className="fa fa-sort-up"></i>
                        </div>
                        <div className="col-3 d-none d-sm-block">
                            Last modified
                        </div>
                        <div className="col-2 d-none d-sm-block">
                            Quizzes
                        </div>
                        <div className="col-1 text-nowrap">
                            <i className="fa fa-folder"></i>
                            <i className="fa fa-sort-alpha-up-alt"></i>
                            <Link to="/courses/grid">
                                <i className="fa fa-th"></i>
                            </Link>

                        </div>
                    </div>
                    {
                        this.props.courses.map(course =>
                        <CourseRow
                            key={course._id}
                            deleteCourse={this.props.deleteCourse}
                            updateCourse={this.props.updateCourse}
                            course={course}
                            title={course.title}
                            lastModified={course.lastModified}
                            owner={course.owner}/>
                        )
                    }
                </div>
            )
        }
}