import axios from 'axios';
import createAxios from '../../services';
const AXIOS = createAxios();
const TODO_API = {
    fetch: async () => {
        return await AXIOS.get('https://b3cb-118-69-77-229.ap.ngrok.io/v1/todos?page=1&limit=15');
    },
    add: async (data) => {
        return await axios.post('https://62d4fccd5112e98e4856080b.mockapi.io/todos', data);
    },
    update: async (data) => {
        return await axios.put(`https://62d4fccd5112e98e4856080b.mockapi.io/todos/${data.id}`, data);
    },
    delete: async (id) => {
        return await axios.delete(`https://62d4fccd5112e98e4856080b.mockapi.io/todos/${id}`);
    },
};
export default TODO_API;
