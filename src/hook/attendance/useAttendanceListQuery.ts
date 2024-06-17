import { http } from "@/apis/http";
import { CommonNoPageRes, CommonRes } from "@/types";
import { GetAttendanceListResponse } from "@/types/attendance/types";
import { ScheduleProp } from "@/types/schedule";
import { useQuery } from "@tanstack/react-query";

type AttendanceListQueryProps = Omit<ScheduleProp, "userId">;

export const useAttendanceListQuery = ({
  clubId,
}: AttendanceListQueryProps) => {
  return useQuery<CommonNoPageRes<GetAttendanceListResponse>>({
    queryKey: [`attendanceList`, { clubId }],
    queryFn: () =>
      http.get<CommonNoPageRes<GetAttendanceListResponse>>(
        `/${clubId}/attendance-list`,
        {
          headers: { accept: "*/*" },
        }
      ),
  });
};
