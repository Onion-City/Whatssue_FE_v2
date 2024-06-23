import { http } from "@/apis/http";
import { AttendanceInfo } from "@/types/attendance/types";
import { ScheduleDetailProp } from "@/types/schedule";
import { useQuery } from "@tanstack/react-query";

export const useAttendanceStartQuery = ({
  clubId,
  scheduleId,
  enabled = true,
}: ScheduleDetailProp & { enabled?: boolean }) => {
  return useQuery<AttendanceInfo>({
    queryKey: [`attendanceStart`, { clubId, scheduleId }],
    queryFn: () =>
      http.post<AttendanceInfo>(
        `/${clubId}/schedules/${scheduleId}/attendance-start`,
        {}, // Add any body parameters here if needed
        { headers: { accept: "*/*" } }
      ),
    enabled,
  });
};
