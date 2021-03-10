const BASE_URL = "https://wbdv-generic-server.herokuapp.com/api/xingboliu";

export const createLesson = (moduleId, lesson) =>
    fetch(`${BASE_URL}/modules/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findLessonsForModule = (moduleId) =>
    fetch(`${BASE_URL}/modules/${moduleId}/lessons`)
        .then(response => response.json())

export const updateLesson = (lessonId, lesson) =>
    fetch(`${BASE_URL}/lessons/${lessonId}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteLesson = (lessonId) =>
    fetch(`${BASE_URL}/lessons/${lessonId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const api = {
    createLesson,
    findLessonsForModule,
    updateLesson,
    deleteLesson
}

export default api;