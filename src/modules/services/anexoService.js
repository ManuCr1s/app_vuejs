import axios from 'axios';
axios.defaults.baseURL = 'http://apillama.local.com/';
const getAnexo = () => {
    return axios.get('v1/anexos')
            .then(response =>{
                return response.data;
            })
            .catch(erro =>{
                throw erro;
            });
}
const deleteAnexo = ($id) => {
    return axios.delete('v1/anexos/${$id}'
        .then(response => {
            return response.data;
          })
        .catch(error => {
            throw error;  
        })
    )

}
const createAnexo = (data) => {
    return axios.post('v1/anexos',data)
}
export default{
    getAnexo,deleteAnexo,createAnexo
}