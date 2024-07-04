import { http } from "@/apis/http";
import { UseMutationResult, useMutation } from "@tanstack/react-query";

interface PostCertificationProps {
  toNumber: string;
}

// 인증 번호 문자 메시지 발송 (/certification/send-random-number)
export const useCertificationMutation = () => {
  return useMutation({
    mutationFn: async (data: PostCertificationProps): Promise<UseMutationResult<unknown, Error, PostCertificationProps, unknown>> => {
      console.log(data);
      return http.post(`/certification/send-random-number?toNumber=${data.toNumber}`);
    }
  })
}