import { Attendance, FetchScheduleParams, ScheduleContent } from "../schedule";

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
  attendanceStatus: Attendance;
}
export type GetAttendanceListResponse = AttendanceListItem[];

// 오늘의 일정
export interface TodayScheduleItem
  extends Omit<FetchScheduleParams, "startDate" | "endDate"> {
  clubId: number;
  startDate: string;
  endDate: string;
}

// 출석 아이템
export interface AttendanceSchedule extends ScheduleContent {
  attendanceAddress: string;
  onClick: () => void;
}
