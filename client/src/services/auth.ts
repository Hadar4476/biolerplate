import apiClient from "@/api-client";

import {
  ROUTE_NAMES,
  IUser,
  IRegisterRequest,
  ILoginRequest,
  ILoginResponse,
} from "@/types";

export const login = async (
  userData: ILoginRequest
): Promise<ILoginResponse> => {
  const response = await apiClient.post<ILoginResponse>(
    `${ROUTE_NAMES.AUTH}/login`,
    userData
  );

  return response.data;
};

export const register = async (
  userData: IRegisterRequest
): Promise<IUser["_id"]> => {
  const response = await apiClient.post<IUser["_id"]>(
    `${ROUTE_NAMES.AUTH}/register`,
    userData
  );

  return response.data;
};
