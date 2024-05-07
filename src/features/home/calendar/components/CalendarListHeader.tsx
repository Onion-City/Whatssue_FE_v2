import { Search } from "@/components/atoms/search";
import { CalendarFilter } from "./CalendarFilter";
import { CalendarFilterProvider } from "./CalendarFilterProvider";

export const CalendarListHeader = () => {
    return(
        <CalendarFilterProvider>
            <div className="calendarListHeader">
                <Search />
                <CalendarFilter />
            </div>
        </CalendarFilterProvider>
    );
};