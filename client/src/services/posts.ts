import apiClient from "@/api-client";

import { IPost, ICreatePostRequest, ROUTE_NAMES } from "@/types";

export const fetchPosts = async (): Promise<IPost[]> => {
  const response = await apiClient.get<IPost[]>(ROUTE_NAMES.POSTS);

  return response.data;
};

export const fetcgPostById = async (postId: IPost["_id"]): Promise<IPost[]> => {
  const response = await apiClient.get<IPost[]>(
    `${ROUTE_NAMES.POSTS}/${postId}`
  );

  return response.data;
};

export const createPost = async (
  postData: ICreatePostRequest
): Promise<IPost> => {
  const response = await apiClient.post<IPost>(ROUTE_NAMES.POSTS, postData);

  return response.data;
};

export const updatePost = async (postData: IPost): Promise<IPost> => {
  const response = await apiClient.put<IPost>(
    `${ROUTE_NAMES.POSTS}/${postData._id}`,
    postData
  );

  return response.data;
};

export const deletePost = async (
  postId: IPost["_id"]
): Promise<IPost["_id"]> => {
  const response = await apiClient.delete<IPost["_id"]>(
    `${ROUTE_NAMES.POSTS}/${postId}`
  );

  return response.data;
};
