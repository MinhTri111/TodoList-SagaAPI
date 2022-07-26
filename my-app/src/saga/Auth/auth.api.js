import axios from 'axios';

const AUTH_API = {
    register: async (data) => {
        return await axios.post('https://b3cb-118-69-77-229.ap.ngrok.io/v1/auth/register', data);
    },
    login: async (data) => {
        return await axios.post('https://b3cb-118-69-77-229.ap.ngrok.io/v1/auth/login', data);
    },
};
export default AUTH_API;
