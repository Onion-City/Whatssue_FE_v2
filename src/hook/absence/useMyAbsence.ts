import { AbsenceMyResultsParams } from "@/types/absence/types";
import { ScheduleDate } from "@/types/schedule";
import { useState } from "react";
import { useMyAbsenceQuery } from "./useMyAbsencesQuery";

const useMyAbsence = (
  { 
    clubId, 
    startDate, 
    endDate,
    page,
    size
  }: AbsenceMyResultsParams
) => {
  const [params, setParams] = useState<AbsenceMyResultsParams>({
    clubId: clubId, 
    startDate: startDate, 
    endDate: endDate,
    page,
    size
  });

  const { data: myList } = useMyAbsenceQuery(params);

  // params 변경
  const refetchPeriodSchedule = ({
    startDate, 
    endDate
  }: ScheduleDate) => setParams((prev) => ({
    ...prev,
    startDate: startDate ?? prev.startDate, 
    endDate: endDate ?? prev.endDate
  }));

  return {
    refetchPeriodSchedule,
    myList,
  }
}

export default useMyAbsence