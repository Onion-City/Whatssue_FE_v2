"use client";
import moment from "moment";
import React, { useContext } from "react";
import "./Home.css";

import { Text } from "@/components/atoms/text";
import { ScheduleBox } from "@/components/molecules/scheduleBox";
import { RouterBtn } from "@/components/organisms/RouterBtn/RouterBtn";
import { ScheduleContent } from "@/types/schedule";
import { formatDateKor } from "@/utils/date";
import { ScheduleContext } from "../SetHome";

const HomeDateWrapper = ({ dateList }: {
    dateList: ScheduleContent[]
}) => {
    const { value, onChange } = useContext(ScheduleContext);

    return (
        <div className="homeDate">
            <div className="homeDateWrapper__header">
                <Text
                    color="#fff"
                    fontSize="1.0625rem"
                    fontWeight="700"
                >{formatDateKor(value)}</Text>
                <RouterBtn
                    path={`/1/calendar?month=${moment(value).format("YYYY-MM")}`}
                >
                    <Text
                        color="#fff"
                        fontSize="0.6875rem"
                    >더보기</Text>
                </RouterBtn>
            </div>
            {dateList && dateList?.map((date: ScheduleContent) => (
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
            ))}
        </div>
    )
};

export default HomeDateWrapper;