import {createSlice} from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';
import {login, logout, register} from './auth.thunk';
import {AuthState, User} from './auth.type';

const cookie = new Cookies()

// get user from cookie storage
const user: User | undefined = cookie.get( "user" )

const initialState: AuthState = {
  user: user,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '' as unknown
}

export const authSlice = createSlice( {
  name: 'auth',
  initialState,
  reducers: {
    reset: ( state ) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    }
  },
  extraReducers: ( builder ) => {
    // register builder
    builder
      .addCase( register.pending, ( state ) => {
        state.isLoading = true
      } )
      .addCase( register.fulfilled, ( state, action ) => {
        state.isLoading = false
        state.isSuccess = true
        if ( action.payload ) state.user = action.payload
      } )
      .addCase( register.rejected, ( state, action ) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload
      } )

    // login builder
    builder
      .addCase( login.pending, ( state ) => {
        state.isLoading = true
      } )
      .addCase( login.fulfilled, ( state, action ) => {
        state.isLoading = false
        state.isSuccess = true
        if ( action.payload ) state.user = action.payload
      } )
      .addCase( login.rejected, ( state, action ) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload
      } )

    //logout builder
    builder.addCase( logout.fulfilled, ( state ) => {
      state.user = undefined
    } )
  }
} )


export const {reset} = authSlice.actions

export default authSlice.reducer