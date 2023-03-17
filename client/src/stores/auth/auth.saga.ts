import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {authActions} from './auth.slice';
import {AuthActionType, User} from './auth.type';
import {takeLatest, put, call} from 'redux-saga/effects';
import Cookies from 'universal-cookie';
import authAPI from '../../services/authAPI';
import jwtDecode from 'jwt-decode';

const cookie = new Cookies()

// register
function* register( action: PayloadAction<{user: User}> ) {
  yield put( authActions.startLoading() )

  const {data}: AxiosResponse<User> = yield call( () => authAPI.register( action.payload.user ) )

  if ( data && data.token ) {
    const decoded = jwtDecode( data.token )
    cookie.set( "user", data, {
      expires: new Date( ( decoded as {exp: number} ).exp * 1000 )
    } )
  }

  yield put( authActions.setUser( data ) )

  yield put( authActions.stopLoading() )
}

// login
function* login( action: PayloadAction<{user: User}> ) {
  yield put( authActions.startLoading() )

  const {data}: AxiosResponse<User> = yield call( () => authAPI.login( action.payload.user ) )

  if ( data && data.token ) {
    const decoded = jwtDecode( data.token )
    cookie.set( "user", data, {
      expires: new Date( ( decoded as {exp: number} ).exp * 1000 )
    } )
  }

  yield put( authActions.setUser( data ) )

  yield put( authActions.stopLoading() )
}

// logout
function* logout() {
  yield put( authActions.startLoading() )

  cookie.remove( 'user' )
  yield put( authActions.removeUser() )

  yield put( authActions.stopLoading() )
}

export default function* authWatcher() {
  yield takeLatest( AuthActionType.register, register )
  yield takeLatest( AuthActionType.login, login )
  yield takeLatest( AuthActionType.logout, logout )
}