import {all, fork} from 'redux-saga/effects';
import authWatcher from './auth/auth.saga';
import commentWatcher from './comment/comment.saga';
import feedbackWatcher from './feedback/feedback.saga';

export default function* rootSaga() {
  yield all( [
    fork( commentWatcher ),
    fork( feedbackWatcher ),
    fork( authWatcher )
  ] )
}