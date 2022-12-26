import asyncHandler from 'express-async-handler';
import Feedback, {IFeedback} from './feedbacks.model';
/**
  @desc get all feedbacks
  @route GET /api/feedbacks
  @access private
 */
export const findAllFeedbacks = asyncHandler( async ( req, res, _next ) => {
  const feedbacks: IFeedback[] = await Feedback.find( {owner: req.body.authData._id} )
  res.status( 200 ).send( feedbacks )
} )

/**
  @desc add a feedback
  @route POST /api/feedbacks
  @access private
 */
export const addFeedback = asyncHandler( async ( req, res, _next ) => {
  const {title, type, votes, description}: IFeedback = req.body

  if ( !title || !type ) throw new Error( "Please add all fields" )

  const feedback = await Feedback.create( {
    title,
    type,
    votes,
    description,
    owner: req.body.authData._id
  } )

  if ( feedback ) res.status( 200 ).send( feedback )
} )

/**
  @desc update a feedback
  @route PUT /api/feedbacks
  @access private
 */
export const updateFeedback = asyncHandler( async ( req, res, _next ) => {
  const {_id, title, type, votes, description}: IFeedback = req.body

  if ( !_id ) throw new Error( 'Invalid Feedback ID' )

  if ( !title || !type ) throw new Error( "Please add all fields" )

  const newFeedback: IFeedback = {
    title,
    type,
    votes,
    description,
    owner: req.body.authData._id,
  }

  const feedback = await Feedback.findByIdAndUpdate( _id, newFeedback, {new: true} )

  if ( feedback ) res.status( 200 ).send( feedback )
} )

/**
  @desc get a feedback
  @route GET /api/feedbacks/id
  @access private
 */
export const getSpecificFeedback = asyncHandler( async ( req, res, _next ) => {
  const id = req.params.id

  if ( !id ) throw new Error( "Invalid Feedback ID" )

  const feedback = await Feedback.findById( id )

  if ( feedback?.owner.toString() !== req.body.authData._id.toString() )
    throw new Error( "Access denied, Not Authorized" )

  res.status( 200 ).send( feedback )
} )

/**
  @desc Delete a feedback
  @route DELETE /api/feedbacks/id
  @access private
 */
export const deleteFeedback = asyncHandler( async ( req, res, _next ) => {
  const id = req.params.id

  if ( !id ) throw new Error( "Invalid Feedback ID" )

  const deleted = await Feedback.findByIdAndRemove( id )

  res.status( 200 ).send( deleted )
} )