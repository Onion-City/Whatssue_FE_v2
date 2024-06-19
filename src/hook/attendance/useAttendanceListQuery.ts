import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { GetAttendanceListResponse } from "@/types/attendance/types";
import { ScheduleProp } from "@/types/schedule";
import { useQuery } from "@tanstack/react-query";

export const useAttendanceListQuery = ({
  clubId,
}: Omit<ScheduleProp, "userId">) => {
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
