import AttendanceChip from "@/components/atoms/chip/AttendanceChip";
import { Text } from "@/components/atoms/text";
import { COLORS } from "@/styles";
import { ScheduleBoxProps } from "@/types/schedule";
import "./ScheduleBox.css";

export const ScheduleBox = ({time, title, attendance}: ScheduleBoxProps) => {
    return (
        <div className="scheduleBox">
            <div className="scheduleBox__content">
                <span>
                    <Text
                        color={COLORS.whitegrey}
                        fontSize="0.8125rem"
                    >{time}</Text>
                </span>
                <span>
                    <Text
                        color={COLORS.white}
                        fontSize="0.9375rem"
                        fontWeight="700"
                    >{title}</Text>
                </span>
            </div>
            <span className="scheduleBox__attend wd-20">
                {/* <Text
                    color={COLORS.whitegrey}
                    fontSize="0.8125rem"
                >{attendance}</Text> */}
                <AttendanceChip 
                    type={attendance}
                />
            </span>
        </div>
    )
};
