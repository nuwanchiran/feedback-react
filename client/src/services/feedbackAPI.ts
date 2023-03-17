import {Feedback} from './../stores/feedback/feedback.type';
import api from './api';

const URL = 'feedbacks/'

const getByUser = async () =>
  await api.get( URL )

const add = async ( feedback: Feedback ) =>
  await api.post( URL, feedback )

const edit = async ( feedback: Feedback ) =>
  await api.put( URL, feedback )

const deleteOne = async ( feedback: Feedback ) =>
  await api.delete( URL + feedback._id )

const feedbackAPI = {
  getByUser,
  add,
  edit,
  deleteOne
}

export default feedbackAPI