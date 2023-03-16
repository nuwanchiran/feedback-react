import asyncHandler from 'express-async-handler';
import Comment, {IComment} from './comments.model';

/**
  @desc get all comments by feedback
  @route GET /api/comments/:feedback
  @access private
*/
export const findAllCommentsByFeedback = asyncHandler( async ( req, res, _next ) => {
  const feedback = req.params.feedback
  const comments = await Comment.find( {feedback} ).populate( 'owner', ['_id', 'name'] )
  res.status( 200 ).send( comments )
} )

/**
  @desc create a comment
  @route POST /api/comments/
  @access private
*/
export const addComment = asyncHandler( async ( req, res, _next ) => {
  const {description, feedback}: IComment = req.body

  if ( !description && !feedback ) throw new Error( "Please fill all fields" )

  const comment = await Comment.create( {
    description,
    feedback,
    owner: req.body.authData._id
  } )

  res.status( 200 ).json( {...comment, owner: {...req.body.authData}} )
} )


/**
  @desc delete a comment
  @route POST /api/comments/:id
  @access private
*/
export const deleteComment = asyncHandler( async ( req, res, _next ) => {
  const id = req.params.id

  if ( !id ) throw new Error( "Invalid comment id" )

  const deleted = await Comment.findByIdAndRemove( id )

  res.status( 200 ).send( deleted )
} )