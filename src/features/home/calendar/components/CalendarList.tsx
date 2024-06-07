"use client";
import { DateBox } from "@/components/molecules/dateBox";
import { ScheduleBox } from "@/components/molecules/scheduleBox";
import { RouterBtn } from "@/components/organisms/RouterBtn/RouterBtn";
import useSchedule from "@/hook/schedule/useSchedule";
import moment from "moment";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import "./Calendar.css";

export interface dateProps {
    id: number;
    time: string;
    title: string;
}

const CalendarList = () => {
    const router = useRouter();
    const params = useSearchParams();
    console.log(params.get('month'));
    
    const dateList: dateProps[] = [
        {
            id: 1,
            time: "20:00:00",
            title: "UI 회의"
        },
        {
            id: 2,
            time: "20:00:00",
            title: "와이어 프레임 작성 회의"
        },
        {
            id: 3,
            time: "20:00:00",
            title: "백엔드 회의"
        },
        {
            id: 4,
            time: "20:00:00",
            title: "와이어프레임 작성 회의"
        },
    ];

    const { data, isLoading, mark } = useSchedule({
        clubId: 1,
        q: "",
        sDate: moment(params.get('month'), "YYYY-MM").startOf('month').format("YYYY-MM-DD"), 
        eDate: moment(params.get('month'), "YYYY-MM").endOf('month').format("YYYY-MM-DD")
    });

    return (
        <div className="homeDateWrapper">
            {
                mark && 
                mark.length > 0 && 
                mark?.map((m, i) => (
                    <React.Fragment key={i}>
                        <DateBox
                            date={m}
                        >
                            {
                            data && 
                            data.data && 
                            data.data.content
                                ?.filter((d) => d.scheduleDate === m)
                                ?.map((date) => (
                                    <React.Fragment key={date.scheduleId}>
                                        <RouterBtn
                                            path={`/1/calendar/${date.scheduleId}`}
                                        >
                                            <ScheduleBox
                                                time={date.scheduleTime}
                                                title={date.scheduleName}
                                            />
                                        </RouterBtn>
                                    </React.Fragment>
                                ))
                            }
                        </DateBox>
                    </React.Fragment>
                ))
            }
        </div>
    );
};

export default CalendarList;