import axios from 'axios';
const AUTH_API = {
    register: async (data) => {
        return await axios.post('https://62d4fccd5112e98e4856080b.mockapi.io/users', data);
    },
    getUserByAccount: async (account) => {
        return await axios.get(`https://62d4fccd5112e98e4856080b.mockapi.io/users?account=${account}`);
    },
    // login: async (data) => {
    //     return await axios.post('https://62d4fccd5112e98e4856080b.mockapi.io/todos', data);
    // },
};
export default AUTH_API;
