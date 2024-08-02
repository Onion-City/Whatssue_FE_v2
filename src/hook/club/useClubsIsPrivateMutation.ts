import { http } from "@/apis/http";
import { FormatClubId } from "@/utils/extractPathElements";
import useToast from "@/utils/useToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

// 모집 여부 변경 (/clubs/{clubId}/private)
export function useClubsIsPrivateMutation () {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const clubId = FormatClubId();

  return useMutation<AxiosResponse<string>, Error, boolean>({
    mutationFn: (status: boolean) => {
      const body = {
        isPrivate: !status
      };
      return http.post(`/clubs/${clubId}/private`, body);
    },
    onSuccess: (data) => {
      console.log(data);
      showToast({
        message: "모집 여부가 변경되었습니다.",
        type: "success"
      });
      queryClient.invalidateQueries({
        queryKey: ['clubInfo']
      });
    },
    onError: (error) => {
      console.log(error);
      showToast({
        message: "모집여부 변경 중 에러가 발생하였습니다.",
        type: "error"
      });
    },
  });
}
