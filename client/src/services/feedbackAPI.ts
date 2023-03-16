import {Feedback} from './../stores/feedback/feedback.type';
import http from './http';

const URL = 'feedbacks/'

const getByUser = async () =>
  await http.get( URL )

const add = async ( feedback: Feedback ) =>
  await http.post( URL, feedback )

const edit = async ( feedback: Feedback ) =>
  await http.put( URL, feedback )

const deleteOne = async ( feedback: Feedback ) =>
  await http.delete( URL + feedback._id )

const feedbackAPI = {
  getByUser,
  add,
  edit,
  deleteOne
}

export default feedbackAPI