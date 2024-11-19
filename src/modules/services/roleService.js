import axios from 'axios';
axios.defaults.baseURL = 'http://apillama.local.com/';
const getRole = () => {
    return axios.get('v1/roles')
            .then(response =>{
                return response.data;
            })
            .catch(erro =>{
                throw erro;
            });
}
const deleteRole = ($id) => {
    return axios.delete('v1/roles/${$id}'
        .then(response => {
            return response.data;
          })
        .catch(error => {
            throw error;  
        })
    )

}
const createRole = (data) => {
    return axios.post('v1/roles',data)
}
export default{
    getRole,deleteRole,createRole
}