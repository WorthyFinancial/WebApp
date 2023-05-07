import { Signup, signin } from "@/api/auth/auth";
import { useMutation } from "@tanstack/react-query";

export const useSignUp = () => {
  return useMutation({ mutationFn: Signup });
};

export const useSignIn = () => {
  return useMutation({ mutationFn: signin });
};
