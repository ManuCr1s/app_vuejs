import axios from 'axios';
axios.defaults.baseURL = 'http://apillama.local.com/';
axios.defaults.withCredentials = true;

const login = (form) => {
    return axios.get('sanctum/csrf-cookie')
        .then(() => {
            return axios.post('v1/login', form);
        });
};
export default {
    login
}