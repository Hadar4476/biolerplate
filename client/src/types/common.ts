import { IAuthState } from "./user";

export enum ROUTE_NAMES {
  LOGIN = "login",
  REGISTER = "register",
  POSTS = "posts",
  NOT_FOUND = "not-found",
  DASHBOARD = "dashboard",
  HOME = "/",
}

export interface IDocument {
  _id: string;
}
export interface ISystemState {
  isAppLoaded: boolean;
  language: string;
}

export interface IRootState {
  auth: IAuthState;
  system: ISystemState;
}
