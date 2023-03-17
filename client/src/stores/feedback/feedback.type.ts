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
  isLoading: boolean,
}

export enum FeedbackActionType {
  add = "feedbacks/add",
  edit = "feedbacks/edit",
  remove = "feedbacks/remove",
  fetchAll = "feedbacks/fetchAll"
}
