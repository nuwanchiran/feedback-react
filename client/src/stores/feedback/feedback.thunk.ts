import {createAsyncThunk} from '@reduxjs/toolkit';
import feedbackAPI from '../../services/feedbackAPI';
import {Feedback} from './feedback.type';

// get all feedbacks
export const getAllFeedbacks = createAsyncThunk( 'feedback/getAll', async ( _args, thunkAPI ) => {
  try {
    const res = await feedbackAPI.getByUser()
    return res.data
  } catch ( error ) {
    thunkAPI.rejectWithValue( error )
  }
} )

// add feedback
export const addFeedback = createAsyncThunk( 'feedback/add', async ( feedback: Feedback, thunkAPI ) => {
  try {
    const res = await feedbackAPI.add( feedback )
    return res.data
  } catch ( error ) {
    thunkAPI.rejectWithValue( error )
  }
} )

// edit feedback
export const editFeedback = createAsyncThunk( 'feedback/edit', async ( feedback: Feedback, thunkAPI ) => {
  try {
    const res = await feedbackAPI.edit( feedback )
    return res.data
  } catch ( error ) {
    thunkAPI.rejectWithValue( error )
  }
} )

// delete feedback
export const deleteFeedback = createAsyncThunk( 'feedback/delete', async ( feedback: Feedback, thunkAPI ) => {
  try {
    const res = await feedbackAPI.deleteOne( feedback )
    return res.data
  } catch ( error ) {
    thunkAPI.rejectWithValue( error )
  }
} )

