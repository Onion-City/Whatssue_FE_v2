import { Search } from "@/components/atoms/search";
import { ScheduleDate, ScheduleKeyword } from "@/types/schedule";
import { CalendarFilter } from "./CalendarFilter";
import { CalendarFilterProvider } from "./CalendarFilterProvider";

export interface CalendarListHeaderProps {
    refetchPeriodSchedule: ({ startDate, endDate }: ScheduleDate) => void;
    refetchKeywordSchedule: ({ keyword }: ScheduleKeyword) => void;
}

export const CalendarListHeader = ({
    refetchPeriodSchedule,
    refetchKeywordSchedule
}: CalendarListHeaderProps) => {
    return(
        <CalendarFilterProvider>
            <div className="calendarListHeader">
                <Search 
                    refetchKeywordSchedule={refetchKeywordSchedule}
                />
                <CalendarFilter 
                    refetchPeriodSchedule={refetchPeriodSchedule}
                />
            </div>
        </CalendarFilterProvider>
    );
};