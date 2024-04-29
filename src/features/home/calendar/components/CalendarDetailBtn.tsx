import { Button } from "@/components/atoms/button";
import { useRouter } from "next/navigation";
import { CALENDAR_BTN } from "../constants/const";
import "./Calendar.css";

const CalendarDetailBtn = () => {
    const router = useRouter();
    return (
        <div className="calendarDetailBtn">
            <Button backgroundColor="#fff">{CALENDAR_BTN.absent}</Button>
            <Button>{CALENDAR_BTN.attendance}</Button>
        </div>
    )
};

export default CalendarDetailBtn;