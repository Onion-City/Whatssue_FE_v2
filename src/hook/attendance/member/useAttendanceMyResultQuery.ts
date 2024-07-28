import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { AttendanceMyResultsParams, AttendanceRes } from "@/types/attendance";
import { useQuery } from "@tanstack/react-query";

// 내 출석 조회 (/clubs/{clubId}/schedules/attendance/my-results)
export const useAttendanceMyResultQuery = ({ 
  clubId,
  startDate,
  endDate,
  attendanceType,
}: AttendanceMyResultsParams) => {
    return useQuery<CommonNoPageRes<AttendanceRes>>({
        queryKey: ['attendance-my', {clubId, startDate, endDate, attendanceType}],
        queryFn: async () => {
            const response = await http.get<CommonNoPageRes<AttendanceRes>>(
                `/clubs/${clubId}/schedules/attendance/my-results?startDate=${startDate}&endDate=${endDate}&attendanceType=${attendanceType}`
            );
            return response;
        },
        staleTime: 1000,
    });
};