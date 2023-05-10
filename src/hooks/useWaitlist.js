import { addToWaitlist } from "@/api/waitlist";
import { useMutation } from "@tanstack/react-query";

export const useAddToWaitlist = (success) => {
  return useMutation({
    mutationFn: addToWaitlist, onSuccess: (data) => {
      success(data);
    }
  });
};
