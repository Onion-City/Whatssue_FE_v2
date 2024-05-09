import { Text } from "@/components/atoms/text";
import { COLORS } from "@/styles";
import { ATTEND_TXT } from "../constants/const";
import "./MemberAttendance.css";

interface TotalProps {
    title: string;
    cnt: number;
};

interface AttendDummy {
    name: string;
    attend: number;
    absent: number;
    miss: number;
}

const TotalComponent = ({title, cnt}: TotalProps) => (
    <span className="attendHeader__total__span">
        <Text color="#fff" fontSize="0.875rem" fontWeight="500">{title}</Text>
        <Text color={COLORS.main} fontSize="0.875rem" fontWeight="500">{cnt}번</Text>
    </span>
);

export const AttendanceHeader = () => {
    const attendDummy: AttendDummy = { 
        name: "김준영", attend: 10, absent: 1, miss: 3 
    };

    return (
        <div className="attendHeader">
            <Text color="#fff" fontSize="1.1875rem">{attendDummy?.name}{ATTEND_TXT.title}</Text>
            <div className="attendHeader_total">
                {["attend", "absent", "miss"].map((type) => (
                    <TotalComponent key={type} title={ATTEND_TXT[type as keyof typeof ATTEND_TXT]} cnt={attendDummy[type as keyof AttendDummy] as number} />
                ))}
            </div>
            <div className="attendLine"></div>
        </div>
    );
};
