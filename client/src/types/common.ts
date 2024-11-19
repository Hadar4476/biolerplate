import { IAuthState } from "./user";

export enum ROUTE_NAMES {
  AUTH = "/auth",
  USER = "/user",
  POSTS = "/posts",
}
export interface IDocument {
  _id: string;
}

export interface IRootState {
  auth: IAuthState;
}
