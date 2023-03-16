import {Feedback} from './../feedback/feedback.type';
import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import commentAPI from '../../services/commentAPI';
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

// sagas
function* getCommentsByFeedback() {
  yield takeEvery( "comment/getByFeedback", fetchByFeedback )
}
function* addComment() {
  yield takeEvery( "comment/add", add )
}
function* deleteComment() {
  yield takeEvery( "comment/delete", remove )
}

const commentsSages = {
  getCommentsByFeedback,
  addComment,
  deleteComment
}

export default commentsSages