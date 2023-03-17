import {createSlice} from '@reduxjs/toolkit';
import {CommentStateType} from './comment.type';

const initialState: CommentStateType = {
  comments: [],
  isLoading: false,
}

export const commentSlice = createSlice( {
  name: 'comments',
  initialState,
  reducers: {
    startLoading: ( state ) => {
      state.isLoading = true
    },
    stopLoading: ( state ) => {
      state.isLoading = false
    },
    setComments: ( state, action ) => {
      state.comments = action.payload
      state.isLoading = false
    },
    addComment: ( state, action ) => {
      state.comments.push( action.payload )
    },
    deleteComment: ( state, action ) => {
      state.comments = state.comments.filter( cmt => cmt._id !== action.payload._id )
    }
  }
}, )

export const commentActions = commentSlice.actions

export default commentSlice.reducer