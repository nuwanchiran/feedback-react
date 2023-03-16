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
