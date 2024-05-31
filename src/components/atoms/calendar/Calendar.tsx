"use client";

import moment from "moment";
import dynamic from 'next/dynamic';
import { ReactElement, useEffect } from "react";
// import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import "./Calendar.css";

import { NextIcon } from "./NextIcon";
import { PreviousIcon } from "./PreviousIcon";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calendar = dynamic(() => import('react-calendar'), { ssr: false }); // 지연 로딩

export interface HomeCalendarProps {
  mark: string[];
  setCalendarOpen?: any;
  value: Date;
  onChange: (date: Date) => void;
}

export function HomeCalendar({
  mark,
  setCalendarOpen,
  value,
  onChange,
}: HomeCalendarProps) {

  const handleDateChange = (selectedDate: any) => {
    if (selectedDate instanceof Date) {
      onChange(selectedDate);
    }
  };

  const handleDate = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const newValue = new Date();
    if (e.currentTarget.id === "next") {
      // 다음달
      onChange(moment(newValue.setMonth(value.getMonth() + 1, 1)).toDate())
    } else if (e.currentTarget.id === "prev") {
      // 저번달
      onChange(moment(newValue.setMonth(value.getMonth() - 1, 1)).toDate())
    }
  };

  const handleMonthChange = (e: any): void => {
    onChange(e.activeStartDate);
  };

  useEffect(() => {
    if (mark?.length > 0) {
      console.log(mark);
    }
  }, [mark]);

  return (
    <Calendar
      onChange={handleDateChange}
      onDrillDown={handleMonthChange}
      value={value}
      formatDay={(locale: string | undefined, date: Date) =>
        moment(date).format("D")
      }
      nextLabel={<NextIcon handleDate={handleDate} />}
      prevLabel={<PreviousIcon handleDate={handleDate} />}
      next2Label={null}
      prev2Label={null}
      tileContent={({ date, view }) => {
        const html: ReactElement[] = [];
        mark?.forEach((m, i) => {
          if (m === moment(date).format("YYYY-MM-DD")) {
            if (moment(date).format("YYYY-MM-DD") === moment(value).format("YYYY-MM-DD")){
              console.log("!");
              html.push(
                <div 
                  key={i}
                  className="dot selected"
                ></div>
              );
            } else {
              html.push(
                <div 
                  key={i}
                  className="dot"
                ></div>
              );
            }
          }
        })
        return (
          <>
            <div className="flex justify-center items-center absoluteDiv">
              {html}
            </div>
          </>
        );
      }}
    ></Calendar>
  );
}
