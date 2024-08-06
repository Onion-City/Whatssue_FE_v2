"use client";
import { HistoryHeader } from "@/components/organisms/Header";
import useSchedule from "@/hook/schedule/useSchedule";
import { FormatClubId } from "@/utils/extractPathElements";
import CalendarList from "./components/CalendarList";
import { CalendarListHeader } from "./components/CalendarListHeader";

const SetCalendar = () => {
    const clubId = FormatClubId();
    const { data: scheduleData, refetchPeriodSchedule, refetchKeywordSchedule, isLoading, mark } = useSchedule({
        clubId: clubId,
        keyword: "",
        startDate: "", 
        endDate: "",
        page: 0,
        size: 20,
    });

    return (
        <>
        <HistoryHeader />
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