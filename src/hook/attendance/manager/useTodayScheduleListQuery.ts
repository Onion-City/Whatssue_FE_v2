import { http } from "@/apis/http";
import { CommonRes } from "@/types";
import {
  AttendanceSchedule,
  TodayScheduleItem,
} from "@/types/attendance/types";
import { useQuery } from "@tanstack/react-query";

export const useTodayScheduleListQuery = ({
  clubId,
  startDate,
  endDate,
  page,
  size,
  sort="",
}: TodayScheduleItem) => {
  return useQuery<CommonRes<AttendanceSchedule>>({
    queryKey: ["todayScheduleList", clubId, startDate, endDate],
    queryFn: async () => {
      const response = await http.get<CommonRes<AttendanceSchedule>>(
        `/clubs/${clubId}/schedules?startDate=${startDate}&endDate=${endDate}&page=${page}&size=${size}`
      );
      return response;
    },
    staleTime: 1000,
  });
};
