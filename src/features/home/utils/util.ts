import { ScheduleContent } from "@/types/schedule";
import moment from "moment";

// 선택 날짜 일정 필터링 function
export const filterDate = ({ dateList, selectedDate}: {
  dateList: ScheduleContent[] | undefined,
  selectedDate: Date
}): ScheduleContent[] => {
  return dateList?.filter(
      (d: ScheduleContent) => d.scheduleDate === moment(selectedDate).format("YYYY-MM-DD")
  ) ?? [];
}

// 달 변화 여부 확인 function
export const changeMonth = ({ prevMonth, newMonth }: {
  prevMonth: Date,
  newMonth: Date
}): boolean => {
  const p = moment(prevMonth).format("YYYY-MM");
  const n = moment(newMonth).format("YYYY-MM");
  if (p !== n) return true;
  return false;
}

// 일정이 존재하는 날짜만 추출
export const getScheduleExist = ({ dateList }: {
  dateList: ScheduleContent[] | undefined,
}): string[] => {
  return dateList?.map((
    d: ScheduleContent
  ) => d.scheduleDate) ?? []
}