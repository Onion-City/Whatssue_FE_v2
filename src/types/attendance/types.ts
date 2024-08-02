import { Attendance, FetchScheduleParams, ScheduleContent } from "../schedule";
import { CommonPage } from "../types";

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

// 오늘의 일정
export interface TodayScheduleItem
  extends Omit<FetchScheduleParams, "startDate" | "endDate"> {
  clubId: number;
  startDate: string;
  endDate: string;
}

// 출석 아이템
export interface AttendanceSchedule extends ScheduleContent {
  isSuccess?: boolean;
  onClick: () => void;
}

// 출석하기
export interface AttendanceReqData {
  attendanceNum: number;
}

// 출석한 멤버 리스트 조회
export interface AttendanceMemberListItem {
  clubId: number;
  scheduleId: number;
  clubMemberId: number;
  clubMemberName: string;
  attendanceType: string;
}

// 내 출석 조회 params
export interface AttendanceMyResultsParams {
  clubId: number;
  startDate: string;
  endDate: string;
  attendanceType: "TOTAL" | "ATTENDANCE" | "ABSENCE" | "OFFICIAL_ABSENCE";
}

// 내 출석 조회 response
export interface AttendanceMyResultRes extends Omit<AttendanceMemberListItem, 'clubId' | 'scheduleId'> {
  id?: number;
  scheduleTitle: string;
  scheduleDate: string;
}

export interface AttendanceRes {
  attendanceList: CommonPage<AttendanceMyResultRes>;
  memberId: number;
  memberName: string;
}
// 출석 수정
export interface AttendanceCorrectionReqData
  extends Omit<AttendanceMemberListItem, "clubMemberName"> {
  memberId: number;
}
