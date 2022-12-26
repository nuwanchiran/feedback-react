import mongoose, {ObjectId} from 'mongoose'

export interface IComment {
  _id?: ObjectId,
  description: String,
  owner: ObjectId,
  feedback:ObjectId,
  createdAt?: Date,
  updatedAt?: Date
}

const CommentSchema = new mongoose.Schema<IComment>( {
  description: {
    type: String,
    require: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref:"User"
  },
  feedback: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref:"Feedback"
  }
}, {
  timestamps: true
} )

const Comment = mongoose.model<IComment>( "Comment", CommentSchema )

export default Comment