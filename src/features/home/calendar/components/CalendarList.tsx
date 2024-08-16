"use client";
import { DateBox } from "@/components/molecules/dateBox";
import { ScheduleBox } from "@/components/molecules/scheduleBox";
import { RouterBtn } from "@/components/organisms/RouterBtn/RouterBtn";
import { ScheduleContent } from "@/types/schedule";
import { FormatClubId } from "@/utils/extractPathElements";
import { useRouter } from "next/navigation";
import React from "react";
import "./Calendar.css";

export interface dateProps {
  id: number;
  time: string;
  title: string;
}

export interface CalendarListProps {
  data?: {
    content: ScheduleContent[];
  };
  mark?: string[];
}

const CalendarList = ({ data: scheduleData, mark }: CalendarListProps) => {
  const router = useRouter();
  const clubId = FormatClubId();

  return (
    <div className="homeDateWrapper">
      {mark &&
        mark.length > 0 &&
        mark?.map((m, i) => (
          <React.Fragment key={i}>
            <DateBox date={m}>
              {scheduleData &&
                scheduleData?.content
                  ?.filter((d) => d.scheduleDate === m)
                  ?.map((date) => (
                    <React.Fragment key={date.scheduleId}>
                      <RouterBtn
                        path={`/${clubId}/calendar/${date.scheduleId}`}
                      >
                        <ScheduleBox
                          time={date.scheduleTime}
                          title={date.scheduleName}
                          attendance={date.attendanceStatus}
                        />
                      </RouterBtn>
                    </React.Fragment>
                  ))}
            </DateBox>
          </React.Fragment>
        ))}
    </div>
  );
};

export default CalendarList;
