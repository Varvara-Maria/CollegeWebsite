import axios from 'axios'
const base_uri = "https://localhost:7202/api";


export default class BaseService{
    

    getElements = (uri) => {
        return axios.get(base_uri + uri);
    }
}