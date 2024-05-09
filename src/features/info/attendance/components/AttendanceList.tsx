"use client";
import React, { useEffect, useMemo } from "react";
import { AttendanceFilter } from "./AttendanceFilter";

import moment from "moment";
import { AttendanceBox } from "./AttendanceBox";
import { AttendanceMonth } from "./AttendanceMonth";
import "./MemberAttendance.css";

export interface AttendListTypes {
    id: number;
    date: Date;
    attend: number;
    title: string;
};

export const AttendanceList = () => {

    const MemoizedAttendDummy: AttendListTypes[] = useMemo(() => [
        {
            id: 0,
            date: new Date("2024-03-15"),
            attend: 0,
            title: "와이어 프레임 작성 회의"
        },
        {
            id: 1,
            date: new Date("2024-03-28"),
            attend: 1,
            title: "와이어 프레임 작성 회의"
        },
        {
            id: 2,
            date: new Date("2024-05-01"),
            attend: 0,
            title: "와이어 프레임 작성 회의"
        },
        {
            id: 3,
            date: new Date("2024-05-02"),
            attend: 1,
            title: "와이어 프레임 작성 회의"
        },
        {
            id: 4,
            date: new Date("2024-05-30"),
            attend: 2,
            title: "와이어 프레임 작성 회의"
        },
        {
            id: 5,
            date: new Date("2024-06-16"),
            attend: 0,
            title: "김동이님 결혼"
        },
    ], []);

    const monthList: string[] = [
        "2024년 3월",
        "2024년 4월",
        "2024년 5월",
        "2024년 6월",
    ]

    useEffect(() => {
    }, [MemoizedAttendDummy]);

    return(
        <div className="attendList">
            <AttendanceFilter />
            {monthList?.map((month, index) => (
                <React.Fragment key={index}>
                    <AttendanceMonth
                        date={month}
                    >
                        <div>
                            {MemoizedAttendDummy
                                ?.filter((item: AttendListTypes) => moment(item.date).format("YYYY년 M월") === month)
                                .map((item: AttendListTypes) => (
                                    <React.Fragment key={item.id}>
                                        <AttendanceBox 
                                            id={item.id}
                                            date={item.date}
                                            attend={item.attend}
                                            title={item.title}
                                        />
                                    </React.Fragment>
                                ))}
                        </div>

                    </AttendanceMonth>
                </React.Fragment>
            ))}
        </div>
    )
}