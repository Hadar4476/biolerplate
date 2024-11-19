import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, register } from "@/services/auth";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
    onError: (error) => {
      console.log(error);
    },
    mutationFn: login,
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
    onError: (error) => {
      console.log(error);
    },
    mutationFn: register,
  });
};
