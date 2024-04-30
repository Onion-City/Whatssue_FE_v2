import { Text } from "@/components/atoms/text";
import { COLORS } from "@/styles";
import { formatTime } from "@/utils/date";
import "./ScheduleBox.css";

interface ScheduleBoxProps {
    time: Date;
    title: string;
    onClick?: any;
}

export const ScheduleBox = ({time, title}: ScheduleBoxProps) => {
    return (
        <div className="scheduleBox">
            <div className="scheduleBox__content">
                <span className="wd-30">
                    <Text
                        color={COLORS.whitegrey}
                        fontSize="0.8125rem"
                    >{formatTime(time)}</Text>
                </span>
                <span className="wd-50">
                    <Text
                        color={COLORS.white}
                        fontSize="0.9375rem"
                        fontWeight="700"
                    >{title}</Text>
                </span>
            </div>
            <span className="scheduleBox__attend wd-20">
                <Text
                    color={COLORS.whitegrey}
                    fontSize="0.8125rem"
                >출석중</Text>
            </span>
        </div>
    )
};
