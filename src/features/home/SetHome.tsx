"use client";
import { createContext } from 'react';

import { ClubHeader } from "@/components/organisms/Header/ClubHeader";
import { Nav } from "@/components/organisms/Nav";
import useSchedule from "@/hook/schedule/useSchedule";
import moment from 'moment';
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
    const { value, setValue, filteredData, isLoading, mark } = useSchedule({
        clubId: 1,
        keyword: "",
        startDate: moment().startOf('month').format("YYYY-MM-DD"), 
        endDate: moment().endOf('month').format("YYYY-MM-DD"),
        page: 0,
        size: 20,
    });
    console.log(filteredData);

    return (
        <ScheduleContext.Provider value={{ value, onChange: setValue }}>
            <div style={{ 'height': '100%', 'paddingBottom': "4.25rem" }}>
                <ClubHeader color={true} />
                <HomeHeader 
                    mark={mark}
                />
                <HomeDateWrapper 
                    dateList={filteredData}
                    isLoading={isLoading}
                />
            </div>
            <Nav />
        </ScheduleContext.Provider>
    );
};

export default SetHome;
