import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { GetAttendanceListResponse } from "@/types/attendance/types";
import { ClubInfoParams } from "@/types/club";
import { useQuery } from "@tanstack/react-query";

export const useAttendanceListQuery = (clubId: number) => {
  return useQuery<CommonNoPageRes<GetAttendanceListResponse>>({
    queryKey: [`attendanceList`, clubId],
    queryFn: () =>
      http.get<CommonNoPageRes<GetAttendanceListResponse>>(
        `/${clubId}/attendance-list`,
        {
          headers: { accept: "*/*" },
        }
      ),
  });
};
