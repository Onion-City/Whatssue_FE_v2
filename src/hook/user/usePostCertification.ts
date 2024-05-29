import { http } from "@/apis/http";
import { useMutation } from "@tanstack/react-query";

interface PostCertificationProps {
  toNumber: string;
}

export const usePostCertification = async () => {
  return useMutation({
    mutationFn: (data: PostCertificationProps) => http.post('/certification/send-random-number', data)
  })
}