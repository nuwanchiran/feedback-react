import express from 'express'
import protect from '../../middleware/authMiddleware'

import {addComment, deleteComment, findAllCommentsByFeedback} from './comments.controller'

const CommentRoutes = express.Router()

CommentRoutes.route( '/' ).post( protect, addComment )
CommentRoutes.route( '/findByFeedback/:feedback' ).get( protect, findAllCommentsByFeedback )
CommentRoutes.route( '/:id' ).delete( protect, deleteComment )

export default CommentRoutes