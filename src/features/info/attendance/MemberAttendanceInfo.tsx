import { HistoryHeader } from "@/components/organisms/Header";
import { Nav } from "@/components/organisms/Nav";
import { AttendanceHeader } from "./components/AttendanceHeader";
import { AttendanceList } from "./components/AttendanceList";

export const MemberAttendanceInfo = () => {
    return(
        <>
            <HistoryHeader 
                title="출석 현황"
            />
            <AttendanceHeader />
            <AttendanceList />
            <Nav />
        </>
    )
};