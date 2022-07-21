import axios from 'axios';
const AUTH_API = {
    register: async (data) => {
        return await axios.post('https://62d4fccd5112e98e4856080b.mockapi.io/users', data);
    },
    // login: async (data) => {
    //     return await axios.post('https://62d4fccd5112e98e4856080b.mockapi.io/todos', data);
    // },
};
export default AUTH_API;
