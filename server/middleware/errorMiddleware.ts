import {NextFunction, Request, Response} from 'express'
import {Error} from 'mongoose'

const errorMiddleware = ( err: Error, _req: Request, res: Response, _next: NextFunction ) => {
  const statusCode = res.statusCode ? res.statusCode : 500

  res
    .status( statusCode )
    .json( {
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack
    } )
}

export default errorMiddleware