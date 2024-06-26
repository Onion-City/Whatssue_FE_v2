"use client";
import useSchedule from "@/hook/schedule/useSchedule";
import CalendarList from "./components/CalendarList";
import { CalendarListHeader } from "./components/CalendarListHeader";

const SetCalendar = () => {
    const { data: scheduleData, refetchPeriodSchedule, refetchKeywordSchedule, isLoading, mark } = useSchedule({
        clubId: 1,
        keyword: "",
        startDate: "", 
        endDate: "",
        page: 0,
        size: 20,
    });

    return (
        <>
        <div>
            <CalendarListHeader 
                refetchPeriodSchedule={refetchPeriodSchedule}
                refetchKeywordSchedule={refetchKeywordSchedule}
            />
            {
                isLoading ? (
                    <></>
                ) : (
                    <CalendarList 
                        data={scheduleData?.data} 
                        mark={mark}
                    /> 
                )
            }
        </div>
        </>
    )
};

export default SetCalendar;