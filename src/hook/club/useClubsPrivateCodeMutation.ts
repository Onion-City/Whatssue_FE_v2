import { http } from "@/apis/http";
import { FormatClubId } from "@/utils/extractPathElements";
import useToast from "@/utils/useToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// 초대코드 갱신 (/clubs/{clubId}/private-code)
export function useClubsPrivateCodeMutation() {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const clubId = FormatClubId();

  return useMutation<void, Error>({
    mutationFn: () => http.post(`/clubs/${clubId}/private-code`),
    onSuccess: (data) => {
      console.log(data);
      showToast({
        message: "초대코드가 갱신되었습니다.",
        type: "success"
      });
      queryClient.invalidateQueries({
        queryKey: ['clubInfo']
      })
    },
    onError: (error) => {
      console.log(error);
      showToast({
        message: "초대코드 갱신 중 에러가 발생하였습니다.",
        type: "error"
      });
    },
  });
}
