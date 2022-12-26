import axios from 'axios'
import {User} from '../stores/auth/auth.type'

const localStoreUser = localStorage.getItem( 'user' )

let token;

if ( localStoreUser ) {
  token = ( JSON.parse( localStoreUser ) as User ).token
}

const api = axios.create( {
  baseURL: 'http://localhost:9000/api/',
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${token}`
  }
} )

export default api