// 일정 목록 content
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