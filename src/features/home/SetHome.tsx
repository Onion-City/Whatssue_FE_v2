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
            <HomeHeader />
            <HomeDateWrapper 
            />
        </>
    )
};

export default SetHome;