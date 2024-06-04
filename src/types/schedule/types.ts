// 일정 목록 data
export interface ScheduleContent {
  scheduleId: number;
  scheduleName: string;
  scheduleDate: string;
  scheduleTime: string;
  // attendance: number;
}

// 일정 박스
export interface ScheduleBoxProps {
  time: string;
  title: string;
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