import asyncHandler from 'express-async-handler';
import jwt, {Secret} from 'jsonwebtoken';
import User from '../services/users/users.model';
import {TokenDataType} from './../utils/generateAccessToken';

const TOKEN_SECRET = process.env.TOKEN_SECRET as Secret

const protect = asyncHandler( async ( req, res, next ) => {
  let token: string;
  const {authorization} = req.headers

  /**
    token receive like this "Bearer token"
    need to validate and filter the token
  */
  if ( authorization && authorization.startsWith( 'Bearer' ) ) {
    try {

      // take token from the header
      token = authorization.split( ' ' )[1]

      // decode the token
      const decoded = jwt.verify( token, TOKEN_SECRET ) as TokenDataType

      // search user in the db
      req.body.authData = await User.findById( decoded._id ).select( '-password' )

      next()

    } catch ( error ) {
      console.error( error )
      res.status( 401 )
      throw new Error( "Not authorized, Invalid token" )
    }
  } else {
    res.status( 401 )
    throw new Error( "Not authorized, no token" )
  }
} )

export default protect