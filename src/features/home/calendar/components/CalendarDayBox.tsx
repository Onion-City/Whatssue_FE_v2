import { Text } from "@/components/atoms/text"
import { RouterBtn } from "@/components/organisms/RouterBtn/RouterBtn"
import React from "react"
import HomeDateBox from "../../components/HomeDateBox"
import { dateProps } from "./CalendarList"

export const CalendarDayBox = (date: dateProps) => {
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
    return(
        <div key={date.id}>
            <div className="homeDateWrapper__header">
                <Text
                    color="#fff"
                    fontSize="1.0625rem"
                    fontWeight="700"
                >{date.time}</Text>
            </div>
            <div className="homeDateWrapper__body">
                {dateList?.map((date) => (
                    <React.Fragment key={date.id}>
                        <RouterBtn
                            path={`1/calendar/${date.id}`}
                        >
                            <HomeDateBox
                                time={date.time}
                                title={date.title}
                                // onClick={() => handleDatePage(date.id)}
                            />
                        </RouterBtn>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}