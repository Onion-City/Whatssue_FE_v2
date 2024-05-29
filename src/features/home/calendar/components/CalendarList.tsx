"use client";
import { DateBox } from "@/components/molecules/dateBox";
import { ScheduleBox } from "@/components/molecules/scheduleBox";
import { useRouter } from "next/navigation";
import React from "react";
import "./Calendar.css";

export interface dateProps {
    id: number;
    time: Date;
    title: string;
}

const CalendarList = () => {
    const router = useRouter();
    const dateList: dateProps[] = [
        {
            id: 1,
            time: new Date(),
            title: "UI 회의"
        },
        {
            id: 2,
            time: new Date(),
            title: "와이어 프레임 작성 회의"
        },
        {
            id: 3,
            time: new Date(),
            title: "백엔드 회의"
        },
        {
            id: 4,
            time: new Date(),
            title: "와이어프레임 작성 회의"
        },
    ];

    return (
        <div className="homeDateWrapper">
            <DateBox
                date={new Date()}
            >
                {dateList.map((date) => (
                    <React.Fragment key={date.id}>
                        <ScheduleBox 
                            time={date.time}
                            title={date.title}
                        />
                    </React.Fragment>
                ))}
            </DateBox>
            <DateBox
                date={new Date()}
            >
                {dateList.map((date) => (
                    <React.Fragment key={date.id}>
                        <ScheduleBox 
                            time={date.time}
                            title={date.title}
                        />
                    </React.Fragment>
                ))}
            </DateBox>
        </div>
    );
};

export default CalendarList;