export interface AttendanceItemProps {
  attendanceAddress: string;
  id: number;
  status: string;
  title: string;
  date: string;
  time: string;
  onClick: () => void;
}
