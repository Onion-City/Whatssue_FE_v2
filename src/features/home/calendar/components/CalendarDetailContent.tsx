import { Text } from "@/components/atoms/text";
import { ScheduleDetailContent } from "@/types/schedule";
import { CALENDAR_DETAIL_TXT } from "../constants/const";
import "./Calendar.css";

interface CalendarDetailContentProps {
    detailData: ScheduleDetailContent;
}

const CalendarDetailContent = ({ detailData } : CalendarDetailContentProps) => {
    console.log(detailData);
        const renderDetailBox = (label: string, value: string | undefined) => (
            <div className="calendarDetailContent__box">
                <span className="wd-20">
                    <Text color="#fff" fontSize="0.9375rem" fontWeight="500">
                        {label}
                    </Text>
                </span>
                <span className="wd-80">
                    <Text color="#fff" fontSize="0.9375rem" fontWeight="500">
                        {value}
                    </Text>
                </span>
            </div>
        );
    
        return (
            <div className="calendarDetailContent">
                {renderDetailBox(CALENDAR_DETAIL_TXT.date, detailData.scheduleDate)}
                {renderDetailBox(CALENDAR_DETAIL_TXT.time, detailData.scheduleTime)}
                {renderDetailBox(CALENDAR_DETAIL_TXT.location, detailData.schedulePlace)}
                {renderDetailBox(CALENDAR_DETAIL_TXT.content, detailData.scheduleContent)}
            </div>
        );
};

export default CalendarDetailContent;