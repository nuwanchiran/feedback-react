export type FeedbackType = "bug" | "modification" | "new_feature"

export type Feedback = {
  _id?: string;
  owner?: string;
  title: string;
  description?: string;
  type: FeedbackType;
  votes?: number;
  createdAt?: Date,
  updatedAt?: Date
}

export type FeedbackStateType = {
  feedbacks: Feedback[];
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: unknown
}
