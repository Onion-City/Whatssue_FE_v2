import { Nav } from "@/components/organisms/Nav";
import { AttendanceHeader } from "./components/AttendanceHeader";
import { AttendanceList } from "./components/AttendanceList";

export const MemberAttendanceInfo = () => {
    return(
        <>
            <AttendanceHeader />
            <AttendanceList />
            <Nav />
        </>
    )
};