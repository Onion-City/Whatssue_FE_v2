import { http } from "@/apis/http";
import { AttendanceInfo } from "@/types/attendance/types";
import { useMutation } from "@tanstack/react-query";

export const useAttendanceEndMutationQuery = ({
  clubId,
  scheduleId,
}: Omit<AttendanceInfo, "attendanceNum">) => {
  return useMutation({
    mutationFn: (data: string) =>
      http.post(`/${clubId}/schedules/${scheduleId}/attendance-end`, data),
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
