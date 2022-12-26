import {createAsyncThunk} from '@reduxjs/toolkit'
import authAPI from '../../services/authAPI'
import {User} from './auth.type'

// register user
export const register = createAsyncThunk( 'user/register', async ( user: User, thunkAPI ) => {
  try {
    const response = await authAPI.register( user )
    localStorage.setItem( "user", JSON.stringify( response.data ) )
    if ( response ) return response.data
  } catch ( error ) {
    return thunkAPI.rejectWithValue( error )
  }
} )

// login user
export const login = createAsyncThunk( 'user/login', async ( user: User, thunkAPI ) => {
  try {
    const response = await authAPI.login( user )
    localStorage.setItem( "user", JSON.stringify( response.data ) )
    if ( response ) return response.data
  } catch ( error ) {
    return thunkAPI.rejectWithValue( error )
  }
} )

// logout user
export const logout = createAsyncThunk( 'user/logout', async ( _args, thunkAPI ) => {
  try {
    localStorage.removeItem( 'user' )
  } catch ( error ) {
    return thunkAPI.rejectWithValue( error )
  }
} )