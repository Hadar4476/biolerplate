import apiClient from "@/api-client";

import {
  IUser,
  IRegisterRequest,
  ILoginRequest,
  ILoginResponse,
} from "@/types";

const route = "/auth";

export const login = async (
  userData: ILoginRequest
): Promise<ILoginResponse> => {
  const response = await apiClient.post<ILoginResponse>(
    `${route}/login`,
    userData
  );

  return response.data;
};

export const register = async (
  userData: IRegisterRequest
): Promise<IUser["_id"]> => {
  const response = await apiClient.post<IUser["_id"]>(
    `${route}/register`,
    userData
  );

  return response.data;
};
