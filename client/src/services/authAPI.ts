import {User} from '../stores/auth/auth.type';
import http from './http';

const register = async ( user: User ) => await http.post<User>( 'users', user )
const login = async ( user: User ) => await http.post<User>( 'users/login', user )

const authAPI = {
  register,
  login
}
export default authAPI