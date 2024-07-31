import { http } from "@/apis/http"
import { AbsenceAcceptParams } from "@/types/absence/types"
import useToast from "@/utils/useToast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"

interface ErrorData {
  code: string;
  message: string;
  path: string;
}

// 공결 신청 수락 (/{clubId}/official_absence/accept/{officialAbsenceId})
export const useAbsenceAcceptMutation = ({
  clubId,
  officialAbsenceId
}: AbsenceAcceptParams) => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<string>, Error>({
    mutationFn: () => http.post(`/${clubId}/official-absence/accept/${officialAbsenceId}`),
    onSuccess: (data) => {
      console.log(data);
      if (data.status === 200 && data.data === "공결 신청 수락 완료") {
        showToast({
          message: '공결 신청이 수락되었습니다.', 
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