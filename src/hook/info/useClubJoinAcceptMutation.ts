import { http } from "@/apis/http"
import { JoinRequestParam } from "@/types/info"
import useToast from "@/utils/useToast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"

// 멤버 가입요청 수락 (/clubs/{clubId}/join/{clubJoinRequestId}/accept)
export const useClubJoinAcceptMutation = ({
  clubId,
  clubJoinRequestId
}: JoinRequestParam) => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<string>, Error>({
    mutationFn: () => http.post(`/${clubId}/join/${clubJoinRequestId}/accept`),
    onSuccess: (data) => {
      console.log(data);
      if (data.status === 200) {
        showToast({
          message: '수락 완료되었습니다.', 
          type: 'success'
        });
        queryClient.invalidateQueries({
          queryKey: ['club-join']
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
            queryKey: ['club-join']
          })
        }
      }
    }
  })
}