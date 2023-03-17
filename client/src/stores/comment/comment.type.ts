export type Comment = {
  _id?: string;
  description: string;
  owner?: string;
  feedback?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CommentStateType = {
  comments: Comment[];
  isLoading: boolean,
  message: unknown
}

export enum CommentActionType {
  getByFeedback = "comment/getByFeedback",
  add = "comment/add",
  delete = "comment/delete"
}