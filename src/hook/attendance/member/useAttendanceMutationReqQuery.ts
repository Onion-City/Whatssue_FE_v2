import { http } from "@/apis/http";
import { AttendanceReqData } from "@/types/attendance/types";
import { ScheduleDetailProp } from "@/types/schedule";
import { useMutation } from "@tanstack/react-query";

export const useAttendanceReqMutation = ({
  clubId,
  scheduleId,
}: ScheduleDetailProp) => {
  return useMutation({
    mutationFn: (data: AttendanceReqData) =>
      http.post(`/clubs/${clubId}/schedules/${scheduleId}/attendance`, data),
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
