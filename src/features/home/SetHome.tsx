"use client";
import { ClubHeader } from "@/components/organisms/Header/ClubHeader";
import { Nav } from "@/components/organisms/Nav";
import { useFetchSchedule } from "@/hook/schedule/useFetchSchedule";
import moment from "moment";
import { createContext, useState } from 'react';
import HomeDateWrapper from "./components/HomeDateWrapper";
import HomeHeader from "./components/HomeHeader";

export const ScheduleContext = createContext<{
    value: Date;
    onChange: (newValue: Date) => void;
}>({
    value: new Date(),
    onChange: () => {}
});

// const useScheduleContext = () => useContext(ScheduleContext);

export interface ScheduleListProps {
    scheduleId: number;
    scheduleTitle: string;
    scheduleContent: string;
    scheduleDateTime: Date;
    attendance: number;
}

const SetHome = () => {
    const [value, setValue] = useState<Date>(new Date());

    const data = useFetchSchedule({clubId: 1, q: "", sDate: moment(new Date("2023-01-01")).format("YYYY-MM-DD"), eDate: moment(new Date()).format("YYYY-MM-DD")});
    console.log(data);

    const handleChange = (newValue: Date) => {
        setValue(newValue);
    };

    return (
        <ScheduleContext.Provider value={{ value, onChange: handleChange }}>
            <div>
                <ClubHeader color={true} />
                <HomeHeader />
                <HomeDateWrapper />
            </div>
            <Nav />
        </ScheduleContext.Provider>
    );
};

export default SetHome;
