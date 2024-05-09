"use client"; //set으로 만들고 해당을 제거

import moment from "moment";
import { ReactElement, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import "./Calendar.css";

import { NextIcon } from "./NextIcon";
import { PreviousIcon } from "./PreviousIcon";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export interface HomeCalendarProps {
  // setMarkedDate: (dates: string[]) => void;
  // mark: string[];
  // findSchedule: (date: Date) => void;
  // findMonthSchdule: (month: string) => void;
  fetchData: (date: Date) => void;
  setCalendarOpen?: any;
  // fetchData: () => void;
  value: Date;
  onChange: (date: Date) => void;
  // setNowMonth: (date: Date) => void;
  // setNowDate: (formattedDate: string) => void;
}

export function HomeCalendar({
  // setMarkedDate,
  // mark,
  // findSchedule,
  // findMonthSchdule,
  fetchData,
  setCalendarOpen,
  value,
  onChange,
  // setNowMonth,
  // setNowDate
}: HomeCalendarProps) {
  // const [value, onChange] = useState(new Date());
  const [nowDate, setNowDate] = useState(
    moment(value).format("YYYY년 MM월 DD일")
  );
  const [nowMonth, setNowMonth] = useState(new Date());
  const [markedDate, setMarkedDate] = useState([]);
  const [mark, setMark] = useState([]);

  const [response, setResponse] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  const day: string = moment(value).format("YYYY-MM-DD");
  const currDate: Date = new Date();
  const currDateTime: string = moment(currDate).format("MM-DD");

  // 달을 변경할 때마다 데이터 불러오기
  const findMonthSchdule = async (e: any) => {
    setMarkedDate([]);
    let currentDate = value;
    const currentMonth = value.getMonth();

    if (e === "p") {
      currentDate.setMonth(value.getMonth() - 1);
    } else {
      currentDate.setMonth(value.getMonth() + 1);
    }

    const subMonth = +currentMonth - +currentDate.getMonth();
    if (subMonth === -2) {
      currentDate.setMonth(value.getMonth() - 1);
    } else if (subMonth === 2) {
      currentDate.setMonth(value.getMonth() + 1);
    }

    console.log(currentDate);
    setNowMonth(new Date(currentDate));
  };

  // 해당 날짜 스케줄 찾기
  const findSchedule = (e: any) => {
    setFilteredRes(
      response.filter(
        (es: any) => es?.scheduleDate === moment(e).format("YYYY-MM-DD")
      )
    );
  };

  // PM & AM 형식으로 변경
  const formatTime = (getTime: any) => {
    const [hour, minute] = getTime.split(":");
    const formattedHour =
      parseInt(hour) > 12 ? parseInt(hour) - 12 : parseInt(hour);
    const period = parseInt(hour) >= 12 ? "PM" : "AM";

    return `${formattedHour < 10 ? `0${formattedHour}` : formattedHour}:${minute} ${period}`;
  };

  const handleDateChange = (selectedDate: any) => {
    if (selectedDate instanceof Date) {
      if (moment(value).format("MM") !== moment(selectedDate).format("MM")) {
        setMarkedDate([]);
        fetchData(selectedDate);
      }
      onChange(selectedDate);
      setNowDate(moment(selectedDate).format("YYYY년 MM월 DD일"));
      findSchedule(selectedDate);
      setCalendarOpen(false);
    }
  };

  const handleDate = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setMarkedDate([]);
    findMonthSchdule(e.currentTarget.id);
  };

  const handleMonthChange = (e: any): void => {
    setMarkedDate([]);
    onChange(e.activeStartDate);
    setNowDate(moment(e.activeStartDate).format("YYYY년 MM월 DD일"));
    setNowMonth(e.activeStartDate);
    fetchData(e.activeStartDate);
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
        if (mark?.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
          html.push(<div className="dot"></div>);
        }
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
