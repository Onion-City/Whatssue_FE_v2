import { http } from "@/apis/http"
import { AbsenceReqData, AbsenceReqProps } from "@/types/absence/types"
import { useMutation } from "@tanstack/react-query"

// 공결 신청 (/{clubId}/official_absence/request/{scheduleId})
export const useAbsenceReqMutation = ({
  clubId,
  scheduleId
}: AbsenceReqProps) => {
  return useMutation({
    mutationFn: (data: AbsenceReqData) => http.post(`/${clubId}/official_absence/request/${scheduleId}`, data),
    onSuccess: (data) => {
      console.log(data)
      // if(data?.status === 200){

      // }
    }
  })
}