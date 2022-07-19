import axios from 'axios';
const BLOG_API = {
    fetch: async () => {
        return await axios.get('https://62d4fccd5112e98e4856080b.mockapi.io/todos');
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
export default BLOG_API;
