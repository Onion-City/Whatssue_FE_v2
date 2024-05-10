import { ClubHeader } from "@/components/organisms/Header/ClubHeader";
import { Nav } from "@/components/organisms/Nav";
import HomeDateWrapper from "./components/HomeDateWrapper";
import HomeHeader from "./components/HomeHeader";

export interface ScheduleListProps {
    scheduleId: number;
    scheduleTitle: string;
    scheduleContent: string;
    scheduleDateTime: Date;
    attendance: number;
}

const SetHome = () => {
    const scheduleList: ScheduleListProps[] = [
        {
            scheduleId: 1,
            scheduleTitle: "UI 회의",
            scheduleContent: "",
            scheduleDateTime: new Date(),
            attendance: 0,
        },
        {
            scheduleId: 1,
            scheduleTitle: "UI 회의",
            scheduleContent: "",
            scheduleDateTime: new Date(),
            attendance: 0,
        },
        {
            scheduleId: 1,
            scheduleTitle: "UI 회의",
            scheduleContent: "",
            scheduleDateTime: new Date(),
            attendance: 0,
        },
        {
            scheduleId: 1,
            scheduleTitle: "UI 회의",
            scheduleContent: "",
            scheduleDateTime: new Date(),
            attendance: 0,
        }
    ]
    return (
        <>
            <div>
                <ClubHeader color={true} />
                <HomeHeader />
                <HomeDateWrapper />
            </div>
            <Nav />
        </>
    )
};

export default SetHome;