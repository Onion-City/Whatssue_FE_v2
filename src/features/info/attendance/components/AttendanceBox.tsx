import { Text } from "@/components/atoms/text";
import { COLORS } from "@/styles";
import moment from "moment";
// import { AttendListTypes } from "./AttendanceList";

import "./MemberAttendance.css";

export const AttendanceBox = ({ id, date, attend, title }: {
    id?: number;
    date: string;
    attend: string;
    title: string;
}) => (
    <div className="attendBox">
        <div className="attendBox__left">
            {/* {attend === 0 && <CircleAndText color="green" text={ATTEND_TXT.attend} />}
            {attend === 1 && <CircleAndText color="red" text={ATTEND_TXT.miss} />}
            {attend === 2 && <CircleAndText color="yellow" text={ATTEND_TXT.absent} />} */}
            <CircleAndText 
                color={
                    attend === "출석" ? "green" :
                    attend === "결석" ? "red" :
                    "yellow"
                } 
                text={attend} 
            />
            <span className="attendBox__line"></span>
            <Text color={COLORS.white} fontWeight="500">{title}</Text>
        </div>
        <Text color="#9d9d9d" fontSize="0.9375rem" fontWeight="500">
            {moment(date).format("M월 D일")}
        </Text>
    </div>
);

const CircleAndText = ({ color, text }: { color: string; text: string }) => (
    <>
        <span className={`attendBox__left__circle ${color}`}></span>
        <Text color={COLORS.white} fontSize="0.6875rem" fontWeight="500">{text}</Text>
    </>
);
