import { Text } from "@/components/atoms/text";
import { CalendarFilter } from "@/features/home/calendar/components/CalendarFilter";
import { CalendarFilterProvider } from "@/features/home/calendar/components/CalendarFilterProvider";
import { COLORS } from "@/styles";
import { ScheduleDate } from "@/types/schedule";
import { ATTEND_TXT } from "../constants/const";
import "./MemberAttendance.css";

interface TotalProps {
    title: string;
    cnt: number;
};

interface AttendDummy {
    attend?: number;
    absent?: number;
    miss?: number;
}

const TotalComponent = ({title, cnt}: TotalProps) => (
    <span className="attendHeader__total__span">
        <Text color="#fff" fontSize="0.875rem" fontWeight="500">{title}</Text>
        <Text color={COLORS.main} fontSize="0.875rem" fontWeight="500">{cnt}번</Text>
    </span>
);

export const AttendanceHeader = ({
    clubMemberName,
    attend,
    absent,
    miss,
    refetchPeriodSchedule
}: {
    clubMemberName?: string;
    attend?: number;
    absent?: number;
    miss?: number;
    refetchPeriodSchedule: ({ startDate, endDate }: ScheduleDate) => void;
}) => {
    const attendDummy: AttendDummy = { 
        attend: attend, 
        absent: absent, 
        miss: miss 
    };

    return (
        <div className="attendHeader">
            <Text color="#fff" fontSize="1.1875rem">{clubMemberName}{ATTEND_TXT.title}</Text>
            <div className="attendHeader_total">
                {["attend", "absent", "miss"].map((type) => (
                    <TotalComponent key={type} title={ATTEND_TXT[type as keyof typeof ATTEND_TXT]} cnt={attendDummy[type as keyof AttendDummy] as number} />
                ))}
            </div>
            <div className="attendLine" />
            <CalendarFilterProvider>
                <CalendarFilter 
                    refetchPeriodSchedule={refetchPeriodSchedule}
                />
            </CalendarFilterProvider>
        </div>
    );
};
