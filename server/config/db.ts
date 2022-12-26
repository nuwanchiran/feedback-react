import 'colors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()
const MONGODB = process.env.MONGODB || ''

const connectDB = async () => {
  try {
    const con = await mongoose.connect( MONGODB )
    console.log( `mongoDB connected: ${con.connection.host}`.bgGreen )
  } catch ( error ) {
    console.error( error )
    process.exit( 1 )
  }
}

export default connectDB