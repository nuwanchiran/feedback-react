import {Comment} from '../stores/comment/comment.type';
import {Feedback} from './../stores/feedback/feedback.type';
import api from './api';

const URL = 'comments/'

const getByFeedback = async ( feedback: Feedback ) =>
  await api.get( URL + `findByFeedback/${feedback._id}` )

const addComment = async ( comment: Comment ) =>
  await api.post( URL, comment )

const deleteComment = async ( comment: Comment ) =>
  await api.delete( URL + comment._id )

const commentAPI = {
  getByFeedback,
  addComment,
  deleteComment
}

export default commentAPI