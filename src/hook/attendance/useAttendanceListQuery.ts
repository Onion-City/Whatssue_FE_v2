import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { AttendanceListItem } from "@/types/attendance/types";
import { useQuery } from "@tanstack/react-query";

interface AttendanceListProp {
  data: AttendanceListItem[];
}

export const useAttendanceListQuery = (clubId: number) => {
  return useQuery<CommonNoPageRes<AttendanceListProp>>({
    queryKey: [`attendanceList`, clubId],
    queryFn: () =>
      http.get<CommonNoPageRes<AttendanceListProp>>(
        `/clubs/${clubId}/schedules/attendance-ongoing`
      ),
  });
};
