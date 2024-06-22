import { changeMonth, filterDate } from "@/features/home/utils";
import { getScheduleExist } from "@/features/home/utils/util";
import { FetchScheduleParams, ScheduleDate, ScheduleKeyword } from "@/types/schedule";
import moment from "moment";
import { useState } from "react";
import { useScheduleQuery } from "./useScheduleQuery";

const useSchedule = (
{ 
  clubId, keyword, startDate, endDate 
}: FetchScheduleParams
) => {
  const [value, setValue] = useState<Date>(new Date());
  const [params, setParams] = useState<FetchScheduleParams>({
    clubId: clubId, 
    keyword: keyword, 
    startDate: startDate, 
    endDate: endDate
  })

  // params에 맞는 일정 fetch
  const { data, isLoading } = useScheduleQuery(params);

  // params 변경
  const refetchPeriodSchedule = ({
    startDate, 
    endDate
  }: ScheduleDate) => setParams((prev) => ({
    ...prev,
    startDate: startDate, 
    endDate: endDate
  }))

  const refetchKeywordSchedule = ({
    keyword 
  }: ScheduleKeyword) => setParams((prev) => ({
    ...prev,
    keyword: keyword
  }))

  // 일정 변경 시 실행 function
  const handleChange = (newValue: Date) => {
    // 달 변경 여부
    const isChn = changeMonth({
      prevMonth: value, 
      newMonth: newValue
    })
    setValue(newValue);

    // 달 변경 시 해당 달 일정 새로 fetch
    isChn && setParams({
      ...params,
      startDate: moment(newValue).startOf('month').format("YYYY-MM-DD"),
      endDate: moment(newValue).endOf('month').format("YYYY-MM-DD")
    })
  };

  // 데이터 필터링
  const filteredData = filterDate({
    dateList: data?.data?.content,
    selectedDate: value
  });

  // 일정이 있는 날짜 리스트
  const mark = getScheduleExist({
    dateList: data?.data?.content
  })

  return {
    value, 
    setValue: handleChange,
    refetchPeriodSchedule,
    refetchKeywordSchedule,
    filteredData,
    data, 
    isLoading,
    mark
  };
}

export default useSchedule;