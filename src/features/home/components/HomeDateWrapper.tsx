"use client";
import React, { useContext } from "react";
import "./Home.css";

import { Text } from "@/components/atoms/text";
import { NoData } from "@/components/molecules/noData";
import { ScheduleBox } from "@/components/molecules/scheduleBox";
import { SkeletonScheduleBox } from "@/components/molecules/scheduleBox/SkeletonScheduleBox";
import { RouterBtn } from "@/components/organisms/RouterBtn/RouterBtn";
import { COLORS } from "@/styles";
import { ScheduleContent } from "@/types/schedule";
import { formatDateKor } from "@/utils/date";
import { ScheduleContext } from "../SetHome";

const HomeDateWrapper = ({
  dateList,
  isLoading,
}: {
  dateList: ScheduleContent[];
  isLoading: any;
}) => {
  const { value, onChange } = useContext(ScheduleContext);

  return (
    <div className="homeDate">
      <div className="homeDateWrapper__header">
        <Text color={COLORS.white} fontSize="1.0625rem" fontWeight="700">
          {formatDateKor(value)}
        </Text>
        <RouterBtn path={`/1/calendar`}>
          <Text
            color={COLORS.white}
            fontSize="0.6875rem"
            className="homeDateWrapper__header-btn"
          >
            더보기
          </Text>
        </RouterBtn>
      </div>
      <div className="homeDateWrapper__content">
        {isLoading ? (
          <>
            <SkeletonScheduleBox />
            <SkeletonScheduleBox />
            <SkeletonScheduleBox />
          </>
        ) : dateList && dateList.length > 0 ? (
          dateList?.slice(0, 4)?.map((date: ScheduleContent) => (
            <React.Fragment key={date.scheduleId}>
              <RouterBtn path={`/1/calendar/${date.scheduleId}`}>
                <ScheduleBox
                  time={date.scheduleTime}
                  title={date.scheduleName}
                  attendance={date.attendanceStatus}
                />
              </RouterBtn>
            </React.Fragment>
          ))
        ) : (
          <NoData title={"등록된 일정이 없어요"} />
        )}
      </div>
    </div>
  );
};

export default HomeDateWrapper;
