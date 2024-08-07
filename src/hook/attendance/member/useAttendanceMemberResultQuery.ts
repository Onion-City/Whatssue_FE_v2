import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { AttendanceMyResultsParams, AttendanceRes } from "@/types/attendance";
import { useQuery } from "@tanstack/react-query";

interface AttendanceMyResultsParamsAdd extends AttendanceMyResultsParams{
  memberId: number;
}
// 멤버별 출석 조회
export const useAttendanceMemberResultQuery = ({
  clubId,
  startDate,
  endDate,
  attendanceType,
  memberId
}: AttendanceMyResultsParamsAdd) => {
  return useQuery<CommonNoPageRes<AttendanceRes>>({
    queryKey: ["attendance-member", { clubId, startDate, endDate, attendanceType }],
    queryFn: async () => {
      const response = await http.get<CommonNoPageRes<AttendanceRes>>(
        `/clubs/${clubId}/schedules/attendance/member/${memberId}?startDate=${startDate}&endDate=${endDate}&attendanceType=${attendanceType}`
      );
      return response;
    },
    staleTime: 1000,
  });
};
