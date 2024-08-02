import { http } from "@/apis/http";
import { ScheduleDetailProp } from "@/types/schedule";
import { useMutation } from "@tanstack/react-query";

export const useAttendanceEndMutationQuery = ({
  clubId,
  scheduleId,
}: ScheduleDetailProp) => {
  return useMutation({
    mutationFn: (data: string) =>
      http.post(
        `/clubs/${clubId}/schedules/${scheduleId}/attendance-end`,
        data
      ),
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
