import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { HomeCalendar } from "@/components/atoms/calendar";
import { RegisterBox } from "@/components/molecules/registerBox";
import { ICONS } from "@/constants/images";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./Calendar.css";

const CalendarRegister = ({ register, setValue }: any) => {
  const router = useRouter();
  const [calendarOpen, setCalendarOpen] = useState(false); // calendar open
  const [timeOpen, setTimeOpen] = useState(false);
  const [value, onChange] = useState<Date | undefined>(undefined);
  const [startDate, setStartDate] = useState<Date | null>(null);

  useEffect(() => {
    if (value) {
      setValue("scheduleDate", moment(value).format("YYYY-MM-DD"));
    }
  }, [value]);

  useEffect(() => {
    setValue("scheduleTime", moment(startDate).format("HH:mm"));
  }, [startDate]);

  return (
    <div className="calendarRegister">
      <RegisterBox title="일정명">
        <input type="text" placeholder="일정" {...register("scheduleName")} />
      </RegisterBox>
      <RegisterBox title="날짜">
        <input
          type="text"
          value={moment(value).format("YYYY-MM-DD")}
          onClick={() => setCalendarOpen((prev) => !prev)}
          className="calendarRegister__dateInput"
          {...register("scheduleDate")}
          readOnly
        />
        <Image
          src={ICONS.calendar}
          alt="calendar"
          onClick={() => setCalendarOpen((prev) => !prev)}
        />
        {calendarOpen && (
          <div className="calendarRegister__background">
            <span className="calendarRegister__background__calendar">
              <HomeCalendar
                setCalendarOpen={setCalendarOpen}
                value={value}
                onChange={onChange}
              />
            </span>
          </div>
        )}
      </RegisterBox>
      <RegisterBox title="시간">
        <div className="calendarRegister__time">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            // locale={ ko }
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            // minTime={setHours(setMinutes(new Date(), 30), 9)}
            // maxTime={setHours(setMinutes(new Date(), 0), 17)}
            timeCaption="Time"
            dateFormat="hh:mm aa"
            placeholderText="시간을 선택해주세요"
            className="calendarRegister__dateInput"
          />

          {/* <Image 
                        src={ICONS.clock}
                        alt="calendar"
                        onClick={() => setTimeOpen((prev) => !prev)}
                    /> */}
        </div>
      </RegisterBox>
      <RegisterBox title="장소">
        <input type="text" placeholder="장소" {...register("schedulePlace")} />
      </RegisterBox>
      <RegisterBox title="내용">
        <textarea
          placeholder="내용"
          maxLength={500}
          {...register("scheduleContent")}
        />
      </RegisterBox>
    </div>
  );
};

export default CalendarRegister;
