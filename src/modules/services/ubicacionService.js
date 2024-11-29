import axios from 'axios';
axios.defaults.baseURL = 'http://apillama.local.com/';
const getProvince = () => {
    return axios.get('v1/province')
            .then(response =>{
                return response.data;
            })
            .catch(erro =>{
                throw erro;
            });
}
const getDistricts = () => {
    return axios.get(`v1/distritcs`)
            .then(response =>{
                return response.data;
            })
            .catch(erro =>{
                throw erro;
            });
}
export default{
    getProvince,getDistricts
}