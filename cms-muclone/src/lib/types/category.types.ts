import { IUser } from "./auth.types";

export interface CategoryList {
  id: string;
  name: string;
  createdAt: string;
  createdByUser: IUser;
}
