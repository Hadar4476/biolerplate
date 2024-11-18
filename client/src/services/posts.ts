import apiClient from "@/api-client";

import { IPost, ICreatePostRequest } from "@/types";

export const fetchPosts = async (): Promise<IPost[]> => {
  const response = await apiClient.get<IPost[]>("/posts");
  return response.data;
};

export const createPost = async (
  postData: ICreatePostRequest
): Promise<IPost> => {
  const response = await apiClient.post<IPost>("/posts", postData);

  return response.data;
};

export const updatePost = async (postData: IPost): Promise<IPost> => {
  const response = await apiClient.put<IPost>(
    `/posts/${postData._id}`,
    postData
  );

  return response.data;
};

export const deletePost = async (
  postId: IPost["_id"]
): Promise<IPost["_id"]> => {
  const response = await apiClient.delete<IPost["_id"]>(`/posts/${postId}`);

  return response.data;
};
