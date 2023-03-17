import {User} from '../stores/auth/auth.type';
import api from './api';

const register = async ( user: User ) => await api.post<User>( 'users', user )
const login = async ( user: User ) => await api.post<User>( 'users/login', user )

const authAPI = {
  register,
  login
}
export default authAPI