"use client";
import CalendarList from "./components/CalendarList";
import { CalendarListHeader } from "./components/CalendarListHeader";

const SetCalendar = () => {
    return (
        <div>
            <CalendarListHeader />
            <CalendarList />
        </div>
    )
};

export default SetCalendar;