import AttendanceChip from "@/components/atoms/attendance/AttendanceChip";
import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import { ScheduleDetailContent } from "@/types/schedule";
import Image from "next/image";
import "./Calendar.css";

interface CalendarDetailContentProps {
    detailData: ScheduleDetailContent;
}

const CalendarDetailHeader = ({detailData}: CalendarDetailContentProps)  => {
    return (
        (detailData && (
        <div className="calendarDetailHeader">
            <div className="calendarDetailHeader__title">
                <Image 
                    src={ICONS.calendar}
                    alt="calendar"
                />
                <Text
                    color="#fff"
                    fontSize="1.3125rem"
                    fontWeight="700"
                >{detailData.scheduleName}</Text>
            </div>
            <div className="calendarDetailHeader__content">
                <div className="calendarDetailHeader__content__user">
                    <span className="calendarDetailHeader__content__user__span">
                        <Image 
                            src={detailData?.registerProfileImage}
                            alt="profile"
                            width={20}
                            height={20}
                        />
                    </span>
                    <Text
                        color="#fff"
                        fontSize="0.6875rem"
                    >{detailData.registerName}</Text>
                    <Text
                        color="#d9d9d9"
                        fontSize="0.6875rem"
                        fontWeight="500"
                    >{detailData.registrationDate}</Text>
                </div>
                <AttendanceChip type={detailData?.attendanceStatus} />
            </div>
            <div className="calendarDetailHeader__line"></div>
        </div>)
        )
    )
};

export default CalendarDetailHeader;