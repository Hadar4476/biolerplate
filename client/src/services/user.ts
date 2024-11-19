import apiClient from "@/api-client";

import { IUser, ROUTE_NAMES } from "@/types";

export const fetchUser = async (userId: IUser["_id"]): Promise<IUser> => {
  const response = await apiClient.get<IUser>(`${ROUTE_NAMES.USER}/${userId}`);

  return response.data;
};
