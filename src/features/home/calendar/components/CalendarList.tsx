"use client";
import { Text } from "@/components/atoms/text";
import { formatDateKor } from "@/utils/date";
import { useRouter } from "next/navigation";
import React from "react";
import HomeDateBox from "../../components/HomeDateBox";
import "./Calendar.css";

interface dateProps {
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
    ]
    const renderDateList = (date: dateProps) => (
        <React.Fragment key={date.id}>
            <div className="homeDateWrapper__header">
                <Text
                    color="#fff"
                    fontSize="1.0625rem"
                    fontWeight="700"
                >{formatDateKor(date.time)}</Text>
            </div>
            {dateList?.map((item) => (
                <HomeDateBox
                    key={item.id}
                    time={item.time}
                    title={item.title}
                    onClick={() => router.push('/1/calendar/1')}
                />
            ))}
        </React.Fragment>
    );

    return (
        <div className="homeDateWrapper">
            {dateList.map((date) => renderDateList(date))}
        </div>
    );
};

export default CalendarList;