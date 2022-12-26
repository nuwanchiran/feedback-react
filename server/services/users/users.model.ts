import mongoose, {ObjectId} from 'mongoose';

export interface IUser {
  _id: ObjectId,
  name: string,
  email: string,
  password: string,
  createdAt?: Date,
  updatedAt?: Date
}
const UserSchema = new mongoose.Schema<IUser>( {
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  }
}, {
  timestamps: true
} )

const User = mongoose.model<IUser>( "User", UserSchema )

export default User