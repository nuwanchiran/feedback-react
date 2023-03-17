import {AxiosResponse} from 'axios';
import {feedbackActions} from './feedback.slice';
import {Feedback, FeedbackActionType} from './feedback.type';
import {put, takeLatest, call} from 'redux-saga/effects';
import feedbackAPI from '../../services/feedbackAPI';
import {PayloadAction} from '@reduxjs/toolkit';

// fetch by user
function* fetchByUser() {
  yield put( feedbackActions.startLoading() )

  const {data}: AxiosResponse<Feedback[]> = yield call( () => feedbackAPI.getByUser() )
  yield put( feedbackActions.fetchFeedbacks( data ) )

  yield put( feedbackActions.stopLoading() )
}

// add
function* add( action: PayloadAction<{feedback: Feedback}> ) {
  yield put( feedbackActions.startLoading() )

  const {data}: AxiosResponse<Feedback> = yield call( () => feedbackAPI.add( action.payload.feedback ) )
  yield put( feedbackActions.addFeedback( data ) )

  yield put( feedbackActions.stopLoading() )
}

// edit
function* edit( action: PayloadAction<{feedback: Feedback}> ) {
  yield put( feedbackActions.startLoading() )

  const {data}: AxiosResponse<Feedback> = yield call( () => feedbackAPI.edit( action.payload.feedback ) )
  yield put( feedbackActions.editFeedback( data ) )

  yield put( feedbackActions.stopLoading() )
}

// remove
function* remove( action: PayloadAction<{feedback: Feedback}> ) {
  yield put( feedbackActions.startLoading() )

  const {data}: AxiosResponse<Feedback> = yield call( () => feedbackAPI.remove( action.payload.feedback ) )
  yield put( feedbackActions.deleteFeedback( data ) )

  yield put( feedbackActions.stopLoading() )
}

export default function* feedbackWatcher() {
  yield takeLatest( FeedbackActionType.fetchAll, fetchByUser )
  yield takeLatest( FeedbackActionType.add, add )
  yield takeLatest( FeedbackActionType.edit, edit )
  yield takeLatest( FeedbackActionType.remove, remove )
}