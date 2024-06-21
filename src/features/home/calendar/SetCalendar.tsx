"use client";
import useSchedule from "@/hook/schedule/useSchedule";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import CalendarList from "./components/CalendarList";
import { CalendarListHeader } from "./components/CalendarListHeader";

const SetCalendar = () => {
    const params = useSearchParams();
    const { data: scheduleData, refetchSchedule, isLoading, mark } = useSchedule({
        clubId: 1,
        q: "",
        sDate: moment(params.get('month'), "YYYY-MM").startOf('month').format("YYYY-MM-DD"), 
        eDate: moment(params.get('month'), "YYYY-MM").endOf('month').format("YYYY-MM-DD")
    });

    return (
        <>
        {!scheduleData ? (
            <div>loading...</div>
        ):
        (<div>
            <CalendarListHeader refetchSchedule={refetchSchedule}/>
            <CalendarList data={scheduleData?.data} mark={mark}/>
        </div>)
        }
        </>
    )
};

export default SetCalendar;