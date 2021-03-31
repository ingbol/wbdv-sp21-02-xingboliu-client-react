// const BASE_URL = "https://wbdv-xingboliu-server-java.herokuapp.com";
const BASE_URL = "http://localhost:8080";

export const createWidget = (tid, widget) =>
    fetch(`${BASE_URL}/api/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (tid) =>
    fetch(`${BASE_URL}/api/topics/${tid}/widgets`)
        .then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`${BASE_URL}/api/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers:{
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`${BASE_URL}/api/widgets/${wid}`,{
        method: "DELETE"
    })
        .then(response => response.json())

const api = {
    createWidget,
    findWidgetsForTopic,
    updateWidget,
    deleteWidget
}

export default api


