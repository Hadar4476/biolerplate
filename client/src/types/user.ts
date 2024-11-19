import { IDocument } from "./common";

export interface IUser extends IDocument {
  name: string;
  email: string;
  password: string;
}
