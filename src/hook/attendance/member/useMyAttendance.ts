import { AttendanceMyResultsParams } from "@/types/attendance";
import { ScheduleDate } from "@/types/schedule";
import { useState } from "react";
import { useAttendanceMyResultQuery } from "./useAttendanceMyResultQuery";

const useMyAttendance = (
  { 
    clubId, 
    startDate, 
    attendanceType, 
    endDate
  }: AttendanceMyResultsParams
) => {
  const [params, setParams] = useState<AttendanceMyResultsParams>({
    clubId: clubId, 
    startDate: startDate, 
    endDate: endDate,
    attendanceType: attendanceType
  });

  const { data: attendances } = useAttendanceMyResultQuery(params);

  // params 변경
  const refetchPeriodSchedule = ({
    startDate, 
    endDate
  }: ScheduleDate) => setParams((prev) => ({
    ...prev,
    startDate: startDate ?? prev.startDate, 
    endDate: endDate ?? prev.endDate
  }));

  return {
    refetchPeriodSchedule,
    attendances,
  }
}

export default useMyAttendance