import { Search } from "@/components/atoms/search";
import { FetchScheduleParams } from "@/types/schedule";
import { CalendarFilter } from "./CalendarFilter";
import { CalendarFilterProvider } from "./CalendarFilterProvider";

export interface CalendarListHeaderProps {
    refetchSchedule: (params: FetchScheduleParams) => void;
}

export const CalendarListHeader = ({
    refetchSchedule
}: CalendarListHeaderProps) => {
    return(
        <CalendarFilterProvider>
            <div className="calendarListHeader">
                <Search />
                <CalendarFilter 
                    refetchSchedule={refetchSchedule}
                />
            </div>
        </CalendarFilterProvider>
    );
};