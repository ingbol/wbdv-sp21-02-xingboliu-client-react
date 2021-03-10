import React,{useEffect} from 'react'
import moduleService from "../../services/module-service"
import {Link, useParams} from "react-router-dom";
import EditableItem from "../editable-item";
import {connect} from "react-redux";

const ModuleList = (
    {
        myModules=[],
        createModule,
        deleteModule,
        updateModule,
        findModulesForCourse
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])

    return (
        <div>
            <ul className="list-group">
                {
                    myModules.map(module =>
                        <li className={`list-group-item ${module._id === moduleId ? 'active' : ''}`}>
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                updateItem={updateModule}
                                deleteItem={deleteModule}
                                active={true}
                                item={module}
                            />
                        </li>
                    )
                }
                <li className="list-group-item text-center">
                    <Link to={`/courses/${layout}/edit/${courseId}`}>
                        <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"></i>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModule(courseId, {title: "New Module"})
                .then(theActualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: theActualModule
                }))
        },
        deleteModule: (module) =>
            moduleService.deleteModule(module._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: module
                })),
        updateModule: (module) =>
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module
                })),
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(theModules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: theModules
                }))
        }
    }
}

export default connect(stpm, dtpm)(ModuleList)