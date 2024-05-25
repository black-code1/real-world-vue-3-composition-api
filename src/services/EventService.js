import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/black-code1/real-world-vue-3-composition-api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents(perPage, page) {
       return apiClient.get('/events?_limit=' + perPage + '&_page=' + page) 
    },
    getEvent(id) {
        return apiClient.get('/events/' + id)
    }
}