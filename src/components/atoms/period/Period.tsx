import { useState } from "react";
import { PeriodCalendar } from "../calendar/PeriodCalendar";
import "./Period.css";


export interface PeriodTypes {
    startDate: string;
    endDate: string;
}

interface PeriodProps {
    tmpPeriod: PeriodTypes;
    setTmpPeriod: React.Dispatch<React.SetStateAction<PeriodTypes>>;
};

export const Period = ({ tmpPeriod, setTmpPeriod }: PeriodProps) => {
    const [openCalendar, setOpenCalendar] = useState(false);

    const handleCalendar = () => {
        setOpenCalendar((prev) => !prev);
    }
    return(
        <div className="period">
            <input 
                type="text"
                placeholder="2024.05.02 (목)"
                value={tmpPeriod.startDate}
                readOnly
                onClick={handleCalendar}
            />
            <div className="period__line"></div>
            <input 
                type="text"
                placeholder="2024.05.03 (금)"
                value={tmpPeriod.endDate}
                readOnly
                onClick={handleCalendar}
            />

            {openCalendar && 
                (
                    <div className="period__wrapper">
                        <PeriodCalendar 
                            setCalendarOpen={setOpenCalendar}
                            setTmpPeriod={setTmpPeriod}
                        />
                    </div>
                )
            }
        </div>
    )
};