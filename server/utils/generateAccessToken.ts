import jwt, {Secret} from 'jsonwebtoken'
import {ObjectId} from 'mongoose';

const TOKEN_SECRET = process.env.TOKEN_SECRET as Secret

export type TokenDataType = {
  _id: ObjectId
}

const generateAccessToken = ( _id: ObjectId ) =>
  jwt.sign( {_id}, TOKEN_SECRET, {expiresIn: '30d'} );

export default generateAccessToken