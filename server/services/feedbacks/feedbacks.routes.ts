import express from 'express'
import protect from '../../middleware/authMiddleware'
import {addFeedback, deleteFeedback, findAllFeedbacks, getSpecificFeedback, updateFeedback} from './feedbacks.controller'

const FeedbackRoutes = express.Router()

FeedbackRoutes.route( '/' )
  .get( protect, findAllFeedbacks )
  .post( protect, addFeedback )
  .put( protect, updateFeedback )

FeedbackRoutes.route( '/:id' )
  .get( protect, getSpecificFeedback )
  .delete( protect, deleteFeedback )

export default FeedbackRoutes