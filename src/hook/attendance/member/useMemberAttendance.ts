import { AttendanceMyResultsParams } from "@/types/attendance";
import { ScheduleDate } from "@/types/schedule";
import { useState } from "react";
import { useAttendanceMemberResultQuery } from "./useAttendanceMemberResultQuery";

interface AttendanceMyResultsParamsAdd extends AttendanceMyResultsParams {
  memberId: number;
}

const useMemberAttendance = ({
  clubId,
  startDate,
  attendanceType,
  endDate,
  memberId,
}: AttendanceMyResultsParamsAdd) => {
  const [params, setParams] = useState<AttendanceMyResultsParamsAdd>({
    clubId: clubId,
    startDate: startDate,
    endDate: endDate,
    attendanceType: attendanceType,
    memberId: memberId,
  });

  const { data: attendances } = useAttendanceMemberResultQuery(params);

  // params 변경
  const refetchPeriodSchedule = ({ startDate, endDate }: ScheduleDate) =>
    setParams((prev) => ({
      ...prev,
      startDate: startDate ?? prev.startDate,
      endDate: endDate ?? prev.endDate,
    }));

  return {
    refetchPeriodSchedule,
    attendances,
  };
};

export default useMemberAttendance;
