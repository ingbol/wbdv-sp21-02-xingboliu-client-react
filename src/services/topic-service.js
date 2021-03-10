const BASE_URL = "https://wbdv-generic-server.herokuapp.com/api/xingboliu";

export const createTopic = (lessonId, topic) =>
    fetch(`${BASE_URL}/lessons/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`${BASE_URL}/lessons/${lessonId}/topics`)
        .then(response => response.json())

export const updateTopic = (topicId, topic) =>
    fetch(`${BASE_URL}/topics/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`${BASE_URL}/topics/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const api = {
    createTopic,
    findTopicsForLesson,
    updateTopic,
    deleteTopic
}

export default api;