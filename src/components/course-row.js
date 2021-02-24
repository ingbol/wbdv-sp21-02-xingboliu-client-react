import React, {useState} from 'react';
import {Link} from "react-router-dom";

const CourseRow = (
    {
        course,
        deleteCourse,
        updateCourse
    }) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }

    return (
        <div className="row">
            <div className="col-5">
                {
                    !editing &&
                        <Link to="/editor">
                            <i className="fa fa-file"></i>
                            {course.title}
                        </Link>
                }
                {
                    editing &&
                        <input
                            className="form-control"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}/>
                }
            </div>
            <div className="col-3 d-none d-sm-block">
                {course.owner}
            </div>
            <div className="col-3 d-none d-sm-block">
                {course.lastModified}
            </div>
            <div className="col-1 text-nowrap">
                <i onClick={() => deleteCourse(course)} className="fa fa-trash"></i>
                {
                    editing &&
                    <i onClick={() => saveCourse()} className="fas fa-check"></i>
                }

                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                }
            </div>
        </div>
    )
}

export default CourseRow
