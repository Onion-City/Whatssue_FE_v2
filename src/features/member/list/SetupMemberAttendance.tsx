"use client";
import { HistoryHeader } from "@/components/organisms/Header";
import { Nav } from "@/components/organisms/Nav";
import { AttendanceHeader } from "@/features/info/attendance/components/AttendanceHeader";
import { AttendanceList } from "@/features/info/attendance/components/AttendanceList";
import useMemberAttendance from "@/hook/attendance/member/useMemberAttendance";
import { FormatClubId } from "@/utils/extractPathElements";
import { usePathname } from "next/navigation";

// 멤버 아이디로 조회할 수 있도록 수정하기
export default function SetupMemberAttendamce() {
  const pathName = usePathname();
  const { refetchPeriodSchedule, attendances } = useMemberAttendance({
    clubId: FormatClubId(),
    startDate: "2000-01-01",
    endDate: "2030-01-01",
    attendanceType: "TOTAL",
    memberId: parseInt(pathName.split("/")[3], 10),
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
}
