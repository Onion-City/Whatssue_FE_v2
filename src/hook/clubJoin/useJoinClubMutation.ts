import { http } from "@/apis/http";
import useToast from "@/utils/useToast";
import { useMutation } from "@tanstack/react-query";
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
        message: "모임 가입 신청 완료",
        type: "success"
      });
      console.log(res);
      router.push('/');
    },
    onError: (err) => {
      console.log(err);
      showToast({
        message: "모임 가입 신청 중 오류가 발생하였습니다.",
        type: "error"
      });
    },
  });
};
