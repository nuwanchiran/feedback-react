import {addFeedback, getAllFeedbacks, editFeedback, deleteFeedback} from './feedback.thunk';
import {createSlice} from '@reduxjs/toolkit';
import {FeedbackStateType} from './feedback.type';

const initialState: FeedbackStateType = {
  feedbacks: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '' as unknown
}

export const feedbackSlice = createSlice( {
  name: 'feedbacks',
  initialState,
  reducers: {
    reset: ( state ) => state = initialState
  },
  extraReducers: ( builder ) => {
    // get all feedbacks builder
    builder
      .addCase( getAllFeedbacks.pending, ( state ) => {
        state.isLoading = true
      } )
      .addCase( getAllFeedbacks.fulfilled, ( state, action ) => {
        state.isLoading = false
        state.isSuccess = true
        state.feedbacks = action.payload
      } )
      .addCase( getAllFeedbacks.rejected, ( state, action ) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload
      } )

    // add a feedback builder
    builder
      .addCase( addFeedback.pending, ( state ) => {
        state.isLoading = true
      } )
      .addCase( addFeedback.fulfilled, ( state, action ) => {
        state.isLoading = false
        state.isSuccess = true
        state.feedbacks = [action.payload, ...state.feedbacks]
      } )
      .addCase( addFeedback.rejected, ( state, action ) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload
      } )

    // edit a feedback builder
    builder
      .addCase( editFeedback.pending, ( state ) => {
        state.isLoading = true
      } )
      .addCase( editFeedback.fulfilled, ( state, action ) => {
        state.isLoading = false
        state.isSuccess = true

        const index = state.feedbacks.findIndex( fb => fb._id === action.payload._id )

        state.feedbacks = [
          ...state.feedbacks.slice( 0, index ),
          action.payload,
          ...state.feedbacks.slice( index + 1 )
        ]
      } )
      .addCase( editFeedback.rejected, ( state, action ) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload
      } )

    // delete a feedback builder
    builder
      .addCase( deleteFeedback.pending, ( state ) => {
        state.isLoading = true
      } )
      .addCase( deleteFeedback.fulfilled, ( state, action ) => {
        state.isLoading = false
        state.isSuccess = true
        state.feedbacks = state.feedbacks.filter( fb => fb._id !== action.payload._id )
      } )
      .addCase( deleteFeedback.rejected, ( state, action ) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload
      } )
  },
} )

export const {reset} = feedbackSlice.actions

export default feedbackSlice.reducer