"use client";
import { createContext } from 'react';

import { ClubHeader } from "@/components/organisms/Header/ClubHeader";
import { Nav } from "@/components/organisms/Nav";
import useSchedule from "@/hook/schedule/useSchedule";
import HomeDateWrapper from "./components/HomeDateWrapper";
import HomeHeader from "./components/HomeHeader";

export const ScheduleContext = createContext<{
    value: Date;
    onChange: (newValue: Date) => void;
}>({
    value: new Date(),
    onChange: () => {}
});

const SetHome = () => {
    const { value, setValue, data, isLoading, mark } = useSchedule();
    // TODO: isLoading 시 skeleton UI 적용
    console.log(data);

    return (
        <ScheduleContext.Provider value={{ value, onChange: setValue }}>
            <div>
                <ClubHeader color={true} />
                <HomeHeader 
                    mark={mark}
                />
                <HomeDateWrapper 
                    dateList={data}
                />
            </div>
            <Nav />
        </ScheduleContext.Provider>
    );
};

export default SetHome;
