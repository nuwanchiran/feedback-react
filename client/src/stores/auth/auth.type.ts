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
  isLoading: boolean,
}

export enum AuthActionType {
  login = "user/login",
  register = "user/register",
  logout = "user/logout"
}