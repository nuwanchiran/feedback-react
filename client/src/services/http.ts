import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies()

const http = axios.create( {
  baseURL: 'http://localhost:9000/api/',
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${cookie.get( "user" ).token}`
  }
} )

export default http