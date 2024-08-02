import { http } from "@/apis/http";
import { AbsenceAcceptParams } from "@/types/absence/types";
import useToast from "@/utils/useToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

// 공결 신청 거절 (/{clubId}/official_absence/reject/{officialAbsenceId})
export const useAbsenceRejectMutation = ({
  clubId,
  officialAbsenceId
}: AbsenceAcceptParams) => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<string>>({
    mutationFn: () => http.post(`/${clubId}/official-absence/reject/${officialAbsenceId}`),
    onSuccess: (data) => {
      console.log(data);
      if (data.status === 200 && data.data === "공결 신청 거절 완료") {
        showToast({
          message: '공결 신청이 거절되었습니다.', 
          type: 'success'
        });
        queryClient.invalidateQueries({
          queryKey: ['request-absence']
        })
      } else {
        showToast({
          message: data.data,
          type: 'error'
        });
      }
    },
    onError: (error) => {
      if ((error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<any>;
        if (axiosError.response) {
          showToast({
            message: `${axiosError.response.data.message}`,
            type: 'error'
          });
          queryClient.invalidateQueries({
            queryKey: ['request-absence']
          })
        }
      }
    }
  })
}