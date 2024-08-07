import { http } from "@/apis/http";
import { AttendanceUpdateParams } from "@/types/attendance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useAttendanceUpdateMutation = (clubId: number) => {
  const queryClient = useQueryClient();
  return useMutation<
    AxiosResponse<{ scheduleId: number }>,
    unknown,
    AttendanceUpdateParams
  >({
    mutationFn: (data) => {
      const modifiedList = data.attendmodifyDtoList.filter(
        (item) => item.isModified
      );

      return http.put(`/clubs/${clubId}/schedules/attendance`, {
        scheduleId: data.scheduleId,
        attendmodifyDtoList: modifiedList,
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["schedule", { clubId, scheduleId: data.data.scheduleId }],
      });
      console.log(data);
    },
  });
};
