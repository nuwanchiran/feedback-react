import authReducer from './auth/auth.slice';
import feedbackReducer from './feedback/feedback.slice'
import commentReducer from './comment/comment.slice'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore( {
  reducer: {
    auth: authReducer,
    feedback: feedbackReducer,
    comment: commentReducer
  }
} )

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch