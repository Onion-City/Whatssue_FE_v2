import { http } from "@/apis/http"
import { FormatClubId } from "@/utils/extractPathElements"
import useToast from "@/utils/useToast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"

// 멤버 가입요청 수락 (/clubs/{clubId}/join/{clubJoinRequestId}/accept)
export const useClubJoinAcceptMutation = () => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const clubId = FormatClubId();

  return useMutation<AxiosResponse<string>, Error, number[]>({
    mutationFn: async (selectJoins: number[]) => {
      return await http.post(`/clubs/${clubId}/join/accept`, selectJoins)
    },
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