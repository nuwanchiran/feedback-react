import mongoose, {ObjectId} from 'mongoose'

export type FeedbackType = "bug" | "modification" | "new_feature"

export interface IFeedback {
  _id?: ObjectId;
  owner: ObjectId;
  title: string;
  description?: string;
  type: FeedbackType;
  votes?: number;
  createdAt?: Date,
  updatedAt?: Date
}

const FeedbackSchema = new mongoose.Schema<IFeedback>( {
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "User"
  },
  title: {
    type: String,
    require: true
  },
  description: String,
  type: {
    type: String,
    require: true,
    enum: ["bug", "modification", "new_feature"]
  },
  votes: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
} )

const Feedback = mongoose.model<IFeedback>( 'Feedback', FeedbackSchema )

export default Feedback