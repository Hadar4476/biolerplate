import { IPost } from "@/types";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
} from "@/services/posts";

export const usePosts = () => {
  return useQuery<IPost[]>({ queryKey: ["posts"], queryFn: fetchPosts });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      console.log(error);
    },
    mutationFn: createPost,
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      console.log(error);
    },
    mutationFn: updatePost,
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      console.log(error);
    },
    mutationFn: deletePost,
  });
};
