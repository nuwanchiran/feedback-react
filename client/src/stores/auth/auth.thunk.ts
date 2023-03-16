import {createAsyncThunk} from '@reduxjs/toolkit'
import jwtDecode from 'jwt-decode'
import Cookies from 'universal-cookie'
import authAPI from '../../services/authAPI'
import {User} from './auth.type'

const cookie = new Cookies()

// register user
export const register = createAsyncThunk( 'user/register', async ( user: User, thunkAPI ) => {
  try {
    const response = await authAPI.register( user )
    console.log( response.data )

    if ( response.data?.token ) {
      const decoded = jwtDecode( response.data.token )
      cookie.set( "user", response.data, {
        expires: new Date( ( decoded as {exp: number} ).exp * 1000 )
      } )
      return response.data
    }
  } catch ( error ) {
    return thunkAPI.rejectWithValue( error )
  }
} )

// login user
export const login = createAsyncThunk( 'user/login', async ( user: User, thunkAPI ) => {
  try {
    const response = await authAPI.login( user )
    if ( response.data?.token ) {
      const decoded = jwtDecode( response.data.token )
      cookie.set( "user", response.data, {
        expires: new Date( ( decoded as {exp: number} ).exp * 1000 )
      } )
      return response.data
    }
  } catch ( error ) {
    return thunkAPI.rejectWithValue( error )
  }
} )

// logout user
export const logout = createAsyncThunk( 'user/logout', async ( _args, thunkAPI ) => {
  try {
    cookie.remove( 'user' )
  } catch ( error ) {
    return thunkAPI.rejectWithValue( error )
  }
} )