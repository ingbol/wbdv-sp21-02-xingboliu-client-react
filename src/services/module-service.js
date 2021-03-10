const BASE_URL = "https://wbdv-generic-server.herokuapp.com/api/xingboliu";

export const createModule = (courseId, module) =>
    fetch(`${BASE_URL}/courses/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findModulesForCourse = (courseId) =>
    fetch(`${BASE_URL}/courses/${courseId}/modules`)
        .then(response => response.json())

export const updateModule = (moduleId, module) =>
    fetch(`${BASE_URL}/modules/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`${BASE_URL}/modules/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const api = {
    createModule,
    findModulesForCourse,
    updateModule,
    deleteModule
}

export default api;