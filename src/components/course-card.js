import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
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

    return(
        <div className="card" style={{width: "18rem", margin: "15px"}}>
            <div className="wbdv-top-right">
                {
                    editing &&
                    <i onClick={() => saveCourse()} className="fas fa-check"></i>
                }
                <i onClick={() => deleteCourse(course)} className="fas fa-times"></i>
            </div>

            <div className="wbdv-bottom-right">
                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                }
            </div>

            <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">
                    {
                        !editing &&
                        <Link to={`/courses/grid/edit/${course._id}`}>
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
                </h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                <Link to="{`/courses/grid/edit/${course._id}`}" className="btn btn-primary">
                    Go somewhere
                </Link>
            </div>
        </div>)
}

export default CourseCard
