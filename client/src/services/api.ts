import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies()
const token = cookie.get( "user" )?.token

const api = axios.create( {
  baseURL: 'http://localhost:9000/api/',
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${token}`
  }
} )

export default api