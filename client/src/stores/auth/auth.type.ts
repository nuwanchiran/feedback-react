export type User = {
  _id?: string
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  token?: string
}

export type AuthState = {
  user: User | undefined,
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: unknown
}