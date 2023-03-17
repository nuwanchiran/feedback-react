import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import commentAPI from '../../services/commentAPI';
import {Feedback} from './../feedback/feedback.type';
import {commentActions} from './comment.slice';
import {Comment, CommentActionType} from './comment.type';

// fetch
function* fetchByFeedback( action: PayloadAction<{feedback: Feedback}> ) {
  yield put( commentActions.startLoading() )

  const {data}: AxiosResponse<Comment[]> = yield call( () => commentAPI.getByFeedback( action.payload.feedback ) )
  yield put( commentActions.fetchComments( data ) )

  yield put( commentActions.stopLoading() )
}

// add
function* add( action: PayloadAction<{comment: Comment}> ) {
  yield put( commentActions.startLoading() )

  const {data}: AxiosResponse<Comment[]> = yield call( () => commentAPI.addComment( action.payload.comment ) )
  yield put( commentActions.addComment( data ) )

  yield put( commentActions.stopLoading() )
}

// remove
function* remove( action: PayloadAction<{comment: Comment}> ) {
  yield put( commentActions.startLoading() )

  const {data}: AxiosResponse<Comment[]> = yield call( () => commentAPI.deleteComment( action.payload.comment ) )
  yield put( commentActions.deleteComment( data ) )


  yield put( commentActions.stopLoading() )
}

function* commentWatcher() {
  yield takeLatest( CommentActionType.getByFeedback, fetchByFeedback )
  yield takeLatest( CommentActionType.add, add )
  yield takeLatest( CommentActionType.remove, remove )
}

export default commentWatcher