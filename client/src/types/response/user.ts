import { IUser } from "../user";

export interface ILoginResponse {
  token: string;
  userId: IUser["_id"];
}
