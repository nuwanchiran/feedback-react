import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import authReducer from './auth/auth.slice';
import commentReducer from './comment/comment.slice';
import feedbackReducer from './feedback/feedback.slice';
import rootSaga from './rootSaga';

export const sagaMiddleware = createSagaMiddleware()

const store = configureStore( {
  reducer: {
    auth: authReducer,
    feedback: feedbackReducer,
    comment: commentReducer
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( sagaMiddleware ),
} )

export default store

sagaMiddleware.run( rootSaga )

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch