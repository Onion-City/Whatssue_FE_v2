// // 출석 리스트
// export interface AttendanceItem {
//   id: number;
//   status: string;
//   title: string;
//   date: string;
//   time: string;
// }

// export interface AttendanceListProps {
//   clubId: number;
// }

// // 출석 번호
// export interface AttendanceData {
//   attendanceNum: number;
// }

// // 출석 정보
// export interface AttendanceProp {
//   clubId: string;
//   scheduleId: string;
//   memberId: string;
// }

// 출석 열기
export interface AttendanceInfo {
  clubId: number;
  scheduleId: number;
  attendanceNum: number;
}

//현재 출석 진행 중인 스케줄
export interface AttendanceListItem {
  scheduleId: number;
  clubId: number;
  scheduleName: string;
  scheduleContent: string;
  scheduleDateTime: string;
  attendanceStatus: string;
}
export type GetAttendanceListResponse = AttendanceListItem[];
