import { http } from "@/apis/http";
import { ScheduleData, ScheduleProp } from "@/types/schedule";
import { useMutation } from "@tanstack/react-query";

// 일정 등록 (/clubs/{clubId}/schedules)
export const useScheduleMutation = ({clubId, userId}: ScheduleProp) => {
  return useMutation({
    mutationFn: (data: ScheduleData) => http.post(`/clubs/${clubId}/schedules?userId=${userId}`, data),
    onSuccess: (data) => {console.log(data)}
  })
}