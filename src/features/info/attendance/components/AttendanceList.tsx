"use client";
import moment from "moment";
import React from "react";

import { AttendanceMyResultRes } from "@/types/attendance";
import { AttendanceBox } from "./AttendanceBox";
import { AttendanceMonth } from "./AttendanceMonth";

import "./MemberAttendance.css";

export const AttendanceList = ({
  attendance,
}: {
  attendance: AttendanceMyResultRes[] | [];
}) => {
  const monthList: string[] = Array.from(
    new Set(
      attendance?.map((el) => moment(el.scheduleDate).format("YYYY년 M월"))
    )
  );

  console.log(attendance);

  return (
    <div className="attendList">
      {monthList?.map((month, index) => (
        <React.Fragment key={index}>
          <AttendanceMonth date={month}>
            <div>
              {attendance
                ? // attendance.attendance &&
                  // attendance.attendance.length ?
                  attendance
                    ?.filter(
                      (item: AttendanceMyResultRes) =>
                        moment(item.scheduleDate).format("YYYY년 M월") === month
                    )
                    .map((item: AttendanceMyResultRes) => (
                      <React.Fragment key={item.id}>
                        <AttendanceBox
                          id={item.id}
                          date={item.scheduleDate}
                          attend={item.attendanceType}
                          title={item.scheduleTitle}
                        />
                      </React.Fragment>
                    ))
                : null}
            </div>
          </AttendanceMonth>
        </React.Fragment>
      ))}
    </div>
  );
};
