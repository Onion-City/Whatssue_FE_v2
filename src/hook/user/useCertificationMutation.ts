import { http } from "@/apis/http";
import { useMutation } from "@tanstack/react-query";

interface PostCertificationProps {
  toNumber: string;
}

// 인증 번호 문자 메시지 발송 (/certification/send-random-number)
export const useCertificationMutation = async () => {
  return useMutation({
    mutationFn: (data: PostCertificationProps) => http.post('/certification/send-random-number', data)
  })
}