"use client";

import { CalendarFilter } from "@/features/home/calendar/components/CalendarFilter";
import { CalendarFilterProvider } from "@/features/home/calendar/components/CalendarFilterProvider";

import { ScheduleDate } from "@/types/schedule";
import "./MemberAbsent.css";

export const AbsentHeader = ({
    refetchPeriodSchedule
}: {
    refetchPeriodSchedule: ({ startDate, endDate }: ScheduleDate) => void;
}) => {
    return(
        <CalendarFilterProvider>
            <CalendarFilter 
                refetchPeriodSchedule={refetchPeriodSchedule}
            />
        </CalendarFilterProvider>
    )
}