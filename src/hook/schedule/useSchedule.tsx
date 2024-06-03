import { changeMonth, filterDate } from "@/features/home/utils";
import { getScheduleExist } from "@/features/home/utils/util";
import moment from "moment";
import { useState } from "react";
import { FetchScheduleProps, useScheduleQuery } from "./useScheduleQuery";

const useSchedule = () => {
  const [value, setValue] = useState<Date>(new Date());
  const [params, setParams] = useState<FetchScheduleProps>({
      clubId: 1, 
      q: "", 
      sDate: moment().startOf('month').format("YYYY-MM-DD"), 
      eDate: moment().endOf('month').format("YYYY-MM-DD")
  })

  // params에 맞는 일정 fetch
  const { data, isLoading } = useScheduleQuery(params);

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
      sDate: moment(newValue).startOf('month').format("YYYY-MM-DD"),
      eDate: moment(newValue).endOf('month').format("YYYY-MM-DD")
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
    data: filteredData, 
    isLoading,
    mark
  };
}

export default useSchedule;