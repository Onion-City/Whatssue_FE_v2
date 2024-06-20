import { http } from "@/apis/http";
import { CommonRes } from "@/types";
import { AttendanceSchedule, TodaySchedule } from "@/types/attendance/types";
import { useQuery } from "@tanstack/react-query";

export const useTodayScheduleListQuery = ({
  clubId,
  sDate,
  eDate,
}: TodaySchedule) => {
  return useQuery<CommonRes<AttendanceSchedule>>({
    queryKey: ["todayScheduleList", clubId, sDate, eDate],
    queryFn: async () => {
      const response = await http.get<CommonRes<AttendanceSchedule>>(
        `/clubs/${clubId}/schedules?sDate=${sDate}&eDate=${eDate}`
      );
      return response;
    },
    staleTime: 1000,
  });
};
