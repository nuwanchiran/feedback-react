import {all, fork} from 'redux-saga/effects';
import commentWatcher from './comment/comment.saga';

export default function* rootSaga() {
  yield all( [
    fork( commentWatcher ),
  ] )
}