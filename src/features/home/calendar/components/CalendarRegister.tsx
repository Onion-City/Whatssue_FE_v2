import { HomeCalendar } from "@/components/atoms/calendar";
import { RegisterBox } from "@/components/molecules/registerBox";
import { ICONS } from "@/constants/images";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Calendar.css";

interface scheduleProps {
    scheduleName?: string;
    date?: string;
    time?: string;
    location?: string;
    content?: string;
};

const CalendarRegister = () => {
    const router = useRouter();
    const [calendarOpen, setCalendarOpen] = useState(false); // calendar open
    const [value, onChange] = useState<Date>(new Date());
    const {
        register,
        formState: {errors},
        watch,
        reset,
        handleSubmit,
        getValues,
        setError,
        setFocus
    } = useForm<scheduleProps>({
        mode: "onSubmit",
        defaultValues: {
            scheduleName: "",
            date: "",
            time: "",
            location: "",
            content: "",
        },
    });

    return (
        <div className="calendarRegister">
            <RegisterBox
                title="일정명"
            >
                <input 
                    type="text"
                    placeholder="일정"
                    {...register("scheduleName")}
                />
            </RegisterBox>
            <RegisterBox
                title="날짜"
            >
                <input 
                    type="text"
                    placeholder="2024-01-01"
                    value={value ? moment(value).format("YYYY년 MM월 DD일") : moment(new Date()).format("YYYY년 MM월 DD일")}
                    onClick={() => setCalendarOpen((prev) => !prev)}
                    className="calendarRegister__dateInput"
                    {...register("date")}
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
                                fetchData={(date) => console.log(date)}
                                setCalendarOpen={setCalendarOpen}
                                value={value}
                                onChange={onChange}
                            />
                        </span>
                    </div>
                )}
            </RegisterBox>
            <RegisterBox
                title="시간"
            >
                <input 
                    type="text"
                    placeholder="시간"
                    {...register("time")}
                />
            </RegisterBox>
            <RegisterBox
                title="장소"
            >
                <input 
                    type="text"
                    placeholder="장소"
                    {...register("location")}
                />
            </RegisterBox>
            <RegisterBox
                title="내용"
            >
                <textarea 
                    placeholder="내용"
                    maxLength={500}
                    {...register("content")}
                />
            </RegisterBox>
        </div>
    );
};

export default CalendarRegister;