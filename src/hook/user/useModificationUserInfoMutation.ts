import { http } from "@/apis/http";
import { signUpInfo } from "@/types/user/types";
import { useMutation } from "@tanstack/react-query";

export const useModificationUserInfoMutation = () => {
  return useMutation({
    mutationFn: (data: signUpInfo) => http.post(`/user/modification`, data),
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
