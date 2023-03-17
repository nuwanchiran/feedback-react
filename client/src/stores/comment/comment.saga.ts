import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import commentAPI from '../../services/commentAPI';
import {Feedback} from './../feedback/feedback.type';
import {commentActions} from './comment.slice';
import {Comment} from './comment.type';

// fetch
function* fetchByFeedback( action: PayloadAction<{feedback: Feedback}> ) {
  yield put( commentActions.startLoading() )

  const {data}: AxiosResponse<Comment[]> = yield call( () => commentAPI.getByFeedback( action.payload.feedback ) )
  yield put( commentActions.fetchComment( data ) )

  yield put( commentActions.stopLoading() )
}

// add
function* add( action: PayloadAction<{comment: Comment}> ) {
  yield put( commentActions.startLoading() )

  const {data}: AxiosResponse<Comment[]> = yield call( () => commentAPI.addComment( action.payload.comment ) )
  yield put( commentActions.addComments( data ) )

  yield put( commentActions.stopLoading() )
}

// delete
function* remove( action: PayloadAction<{comment: Comment}> ) {
  yield put( commentActions.startLoading() )

  const {data}: AxiosResponse<Comment[]> = yield call( () => commentAPI.deleteComment( action.payload.comment ) )
  yield put( commentActions.deleteComment( data ) )


  yield put( commentActions.stopLoading() )
}

function* commentWatcher() {
  yield takeLatest( "comment/getByFeedback", fetchByFeedback )
  yield takeLatest( "comment/add", add )
  yield takeLatest( "comment/delete", remove )
}

export default commentWatcher