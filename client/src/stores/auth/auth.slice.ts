import {createSlice} from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';
import {AuthState, User} from './auth.type';

const cookie = new Cookies()

// get user from cookie storage
const user: User | undefined = cookie.get( "user" )

const initialState: AuthState = {
  user: user,
  isLoading: false
}

export const authSlice = createSlice( {
  name: 'auth',
  initialState,
  reducers: {
    startLoading: ( state ) => {
      state.isLoading = true
    },
    stopLoading: ( state ) => {
      state.isLoading = false
    },
    setUser: ( state, action ) => {
      state.user = action.payload
    },
    removeUser: ( state ) => {
      state.user = undefined
    }
  }
} )

export const authActions = authSlice.actions
export default authSlice.reducer