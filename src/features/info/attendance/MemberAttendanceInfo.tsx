"use client";
import { HistoryHeader } from "@/components/organisms/Header";
import { Nav } from "@/components/organisms/Nav";
import useMyAttendance from "@/hook/attendance/member/useMyAttendance";
import { FormatClubId } from "@/utils/extractPathElements";
import { AttendanceHeader } from "./components/AttendanceHeader";
import { AttendanceList } from "./components/AttendanceList";

export const MemberAttendanceInfo = () => {
  const clubId = FormatClubId();
  const { refetchPeriodSchedule, attendances } = useMyAttendance({
    clubId: clubId,
    startDate: "2000-01-01",
    endDate: "2030-01-01",
    attendanceType: "TOTAL",
  });

  console.log(attendances);

  const filteredData = (attendanceType: string): number => {
    return (
      attendances?.data?.attendanceList?.content?.filter(
        (el) => el.attendanceType === attendanceType
      ).length || 0
    );
  };

  return (
    <>
      <HistoryHeader title="출석 현황" />
      <AttendanceHeader
        clubMemberName={attendances?.data?.memberName}
        attend={filteredData("출석")}
        absent={filteredData("공결")}
        miss={filteredData("결석")}
        refetchPeriodSchedule={refetchPeriodSchedule}
      />
      {attendances && attendances.data && attendances.data.attendanceList ? (
        <AttendanceList attendance={attendances.data.attendanceList.content} />
      ) : (
        <div>Loading...</div>
      )}
      <Nav />
    </>
  );
};
