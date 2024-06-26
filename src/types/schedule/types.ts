export enum Attendance {
  BEFORE = "BEFORE",
  ONGOING = "ONGOING",
  COMPLETE = "COMPLETE",
}

// 일정 목록 data
export interface ScheduleContent {
  scheduleId: number;
  scheduleName: string;
  scheduleDate: string;
  scheduleTime: string;
  attendanceStatus: Attendance;
}

export interface ScheduleDate {
  startDate?: string;
  endDate?: string;
}

export interface ScheduleKeyword {
  keyword?: string;
}

export interface FetchScheduleParams {
  clubId: number;
  keyword?: string;
  startDate?: string;
  endDate?: string;
  page: number;
  size: number;
  sort?: string;
}

// 일정 박스
export interface ScheduleBoxProps {
  time: string;
  title: string;
  attendance: Attendance;
  onClick?: () => void;
}

// 일정 등록 data

export interface ScheduleProp {
  clubId: number;
  userId: number;
}

export interface ScheduleData {
  scheduleName?: string;
  scheduleContent?: string;
  schedulePlace?: string;
  scheduleDate?: string;
  scheduleTime?: string;
}

// 일정 상세 data

export interface ScheduleDetailProp {
  clubId: number;
  scheduleId: number;
}

export interface ScheduleStartProp extends ScheduleDetailProp {
  enabled: boolean;
}

export interface ScheduleDetailContent {
  scheduleId?: number;
  scheduleDate?: string;
  scheduleTime?: string;
  scheduleName?: string;
  scheduleContent?: string;
  schedulePlace?: string;
  registerName?: string;
  registerProfileImage: string;
  registrationDate: string;
  attendanceStatus: Attendance;
}
