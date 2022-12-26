import bcrypt from 'bcrypt'
import asyncHandler from 'express-async-handler'
import generateAccessToken from '../../utils/generateAccessToken'
import hashPassword from '../../utils/hashPassword'
import User, {IUser} from './users.model'

/**
  @desc register user
  @route POST /api/users
  @access public
*/
export const registerUser = asyncHandler( async ( req, res, _next ) => {

  const user: IUser = req.body

  // check all data available
  if ( !user.name || !user.email || !user.password ) {
    res.status( 400 )
    throw new Error( "Please add all fields" )
  }

  // validate user
  const user_exists = await User.findOne( {email: user.email} )

  if ( user_exists ) {
    res.status( 400 )
    throw new Error( "User already exists" )
  }

  // encrypt password
  const hashed_password = await hashPassword( user.password )

  const saved_user = await User.create( {
    ...req.body,
    password: hashed_password
  } as IUser )

  if ( saved_user ) {
    res.status( 201 ).send( {
      _id: saved_user._id,
      name: saved_user.name,
      email: saved_user.email,
      token: generateAccessToken( saved_user._id )
    } )
  }
} )

/**
  @desc login user
  @route POST /api/users/login
  @access public
*/
export const loginUser = asyncHandler( async ( req, res, _next ) => {
  const {email, password} = req.body
  const existing_user = await User.findOne( {email} )

  if ( existing_user && ( await bcrypt.compare( password, existing_user.password ) ) ) {
    res.status( 201 ).send( {
      _id: existing_user._id,
      name: existing_user.name,
      email: existing_user.email,
      token: generateAccessToken( existing_user._id )
    } )
  } else {
    res.status( 400 )
    throw new Error( 'Invalid credentials' )
  }
} )

/**
  @desc get one user
  @route GET /api/users/id
  @access private
*/
export const getSpecificUser = asyncHandler( async ( req, res, _next ) => {
  const {authData} = req.body

  if ( authData._id.toString() !== req.params.id ) throw new Error( "Not authorized" )

  if ( authData ) {
    res.status( 200 ).send( {
      _id: authData._id,
      name: authData.name,
      email: authData.email,
      token: generateAccessToken( authData._id )
    } )
  } else {
    throw new Error( "User doesn't exist." )
  }
} )