import axios from 'axios';
axios.defaults.baseURL = 'http://apillama.local.com/';
const getCentro = () => {
    return axios.get('v1/centros')
            .then(response =>{
                return response.data;
            })
            .catch(erro =>{
                throw erro;
            });
}
const deleteCentro = ($id) => {
    return axios.delete('v1/centros/${$id}'
        .then(response => {
            return response.data;
          })
        .catch(error => {
            throw error;  
        })
    )

}
const createCentro = (data) => {
    return axios.post('v1/centros',data)
}
export default{
    getCentro,deleteCentro,createCentro
}