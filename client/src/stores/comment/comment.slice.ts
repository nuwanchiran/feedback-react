import {createSlice} from '@reduxjs/toolkit';
import {addComment, deleteComment, getCommentsByFeedback} from './comment.thunk';
import {CommentStateType} from './comment.type';

const initialState: CommentStateType = {
  comments: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '' as unknown
}

export const commentSlice = createSlice( {
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers( builder ) {

    // fetch comments
    builder
      .addCase( getCommentsByFeedback.pending, ( state ) => {
        state.isLoading = true
      } )
      .addCase( getCommentsByFeedback.fulfilled, ( state, action ) => {
        state.isLoading = false
        state.isSuccess = true
        state.comments = action.payload
      } )
      .addCase( getCommentsByFeedback.rejected, ( state, action ) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = true
        state.message = action.payload
      } )

    // add comments
    builder
      .addCase( addComment.pending, ( state ) => {
        state.isLoading = true
      } )
      .addCase( addComment.fulfilled, ( state, action ) => {
        state.isLoading = false
        state.isSuccess = true
        state.isLoading = false
        state.comments.push( action.payload )
      } )
      .addCase( addComment.rejected, ( state, action ) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = true
        state.message = action.payload
      } )

    // remove comments
    builder
      .addCase( deleteComment.pending, ( state ) => {
        state.isLoading = true
      } )
      .addCase( deleteComment.fulfilled, ( state, action ) => {
        state.isLoading = false
        state.isSuccess = true
        state.isLoading = false
        state.comments = state.comments.filter( cmt => cmt._id !== action.payload._id )
      } )
      .addCase( deleteComment.rejected, ( state, action ) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = true
        state.message = action.payload
      } )
  },
} )

export default commentSlice.reducer