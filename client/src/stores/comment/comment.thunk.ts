import {Feedback} from './../feedback/feedback.type';
import {createAsyncThunk} from '@reduxjs/toolkit';
import commentAPI from '../../services/commentAPI';
import {Comment} from './comment.type';

// get comments related to feedback
export const getCommentsByFeedback = createAsyncThunk( 'comment/getByFeedback', async ( feedback: Feedback, thunkApi ) => {
  try {
    const res = await commentAPI.getByFeedback( feedback )
    return res.data
  } catch ( error ) {
    thunkApi.rejectWithValue( error )
  }
} )


// add comment
export const addComment = createAsyncThunk( 'comment/Add', async ( comment: Comment, thunkApi ) => {
  try {
    const res = await commentAPI.addComment( comment )
    console.log( res.data )
    return res.data
  } catch ( error ) {
    thunkApi.rejectWithValue( error )
  }
} )

// delete comment
export const deleteComment = createAsyncThunk( 'comment/delete', async ( comment: Comment, thunkApi ) => {
  try {
    const res = await commentAPI.deleteComment( comment )
    return res.data
  } catch ( error ) {
    thunkApi.rejectWithValue( error )
  }
} )


