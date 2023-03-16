import {Comment} from '../stores/comment/comment.type';
import {Feedback} from './../stores/feedback/feedback.type';
import http from './http';

const URL = 'comments/'

const getByFeedback = async ( feedback: Feedback ) =>
  await http.get( URL + `findByFeedback/${feedback._id}` )

const addComment = async ( comment: Comment ) =>
  await http.post( URL, comment )

const deleteComment = async ( comment: Comment ) =>
  await http.delete( URL + comment._id )

const commentAPI = {
  getByFeedback,
  addComment,
  deleteComment
}

export default commentAPI