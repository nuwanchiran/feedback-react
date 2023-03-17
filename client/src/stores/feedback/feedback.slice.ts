import {createSlice} from '@reduxjs/toolkit';
import {FeedbackStateType} from './feedback.type';

const initialState: FeedbackStateType = {
  feedbacks: [],
  isLoading: false,
}

export const feedbackSlice = createSlice( {
  name: 'feedbacks',
  initialState,
  reducers: {
    startLoading: ( state ) => {
      state.isLoading = true
    },
    stopLoading: ( state ) => {
      state.isLoading = false
    },
    fetchFeedbacks: ( state, action ) => {
      state.feedbacks = action.payload
    },
    addFeedback: ( state, action ) => {
      state.feedbacks = [action.payload, ...state.feedbacks]
    },
    editFeedback: ( state, action ) => {
      const index = state.feedbacks.findIndex( fb => fb._id === action.payload._id )

      state.feedbacks = [
        ...state.feedbacks.slice( 0, index ),
        action.payload,
        ...state.feedbacks.slice( index + 1 )
      ]
    },
    deleteFeedback: ( state, action ) => {
      state.feedbacks = state.feedbacks.filter( fb => fb._id !== action.payload._id )
    }
  }
} )

export const feedbackActions = feedbackSlice.actions

export default feedbackSlice.reducer