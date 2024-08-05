import { http } from "@/apis/http";
import useToast from "@/utils/useToast";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

// 모임가입 신청
export const useJoinClubMutation = (clubId: number) => {
  const router = useRouter();
  const {showToast} = useToast();
  const body = {
    clubId: clubId
  }
  return useMutation({
    mutationFn: () => http.post(`/clubs/join`, body),
    onSuccess: (res) => {
      showToast({
        message: "모임 가입 신청이 완료되었습니다.",
        type: "success"
      });
      console.log(res);
      router.push('/');
    },
    onError: (error) => {
      if ((error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<any>;
        if (axiosError.response) {
          showToast({
            message: `${axiosError.response.data.message}`,
            type: 'error'
          });
        }
      }
    },
  });
};
