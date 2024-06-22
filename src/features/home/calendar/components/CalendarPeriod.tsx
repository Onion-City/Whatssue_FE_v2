import { Button } from "@/components/atoms/button";
import { Period } from "@/components/atoms/period";
import { Text } from "@/components/atoms/text";
import moment from "moment";
import { useState } from "react";
import { CALENDAR_PERIOD_BTN, CALENDAR_PERIOD_TXT, CALENDAR_PERIOD_TXT_LIST } from "../constants/const";
import { CalendarFilterProps } from "./CalendarFilter";
import { useCalendarFilter } from "./CalendarFilterProvider";

export const CalendarPeriod = ({
    refetchPeriodSchedule
}: CalendarFilterProps) => {
    const { setOpenFloating, selectedIdx, setSelectedIdx, isPeriod, setIsPeriod, period, setPeriod } = useCalendarFilter();
    const [tmpPeriod, setTmpPeriod] = useState({
        startDate: period.startDate,
        endDate: period.endDate
    });

    const initializePeriod = () => {
        setSelectedIdx(0);
    };

    // 기간별 일정 refetch
    const refetchNewSchedule = ({ newSDate, newEDate }: {
        newSDate: string;
        newEDate: string;
    }) => {
        refetchPeriodSchedule && refetchPeriodSchedule({
            startDate: newSDate,
            endDate: newEDate
        });
    }

    const handlePeriod = () => {
        if(selectedIdx === 0){
            refetchNewSchedule({ newSDate: "", newEDate: "" });
            setIsPeriod(false);
        } else {
            setIsPeriod(true); // 기간 설정했는지 여부
            let newSDate = period.startDate;
            let newEDate = period.endDate;
            switch(selectedIdx) {
                case 1: // 1주일
                    newSDate = moment(new Date()).subtract(7, 'day').format('YYYY-MM-DD');
                    newEDate = moment(new Date()).format('YYYY-MM-DD');
                    break;
                case 2: // 1개월
                    console.log(moment(new Date()).subtract(1, 'months').format('YYYY-MM-DD'));
                    newSDate = moment(new Date()).subtract(1, 'months').format('YYYY-MM-DD');
                    newEDate = moment(new Date()).format('YYYY-MM-DD');
                    break;
                case 3: // 3개월
                    newSDate = moment(new Date()).subtract(3, 'months').format('YYYY-MM-DD');
                    newEDate = moment(new Date()).format('YYYY-MM-DD');
                    break;
                case 4: // 직접 입력
                    setPeriod(tmpPeriod);
                    break;
            }
            refetchNewSchedule({ newSDate: newSDate, newEDate: newEDate });
            setPeriod({
                startDate: newSDate,
                endDate: newEDate
            }); // 설정한 기간
            setIsPeriod(true); // 기간 설정했는지 여부
        }
        setOpenFloating(false); // 바텀시트 닫기
    };

    // useEffect(() => {
    //     if (isPeriod) {
    //         refetchNewSchedule({ newSDate: period.startDate, newEDate: period.endDate });
    //     }
    // }, [period]);

    return(
        <div className="calendarPeriod">
            <div className="calendarPeriod__select">
                <Text
                    fontSize="1.0625rem"
                    fontWeight="700"
                >{CALENDAR_PERIOD_TXT.title}</Text>
                <div className="calendarPeriod__select__wrapper">
                    {CALENDAR_PERIOD_TXT_LIST.map((item) => (
                        <div 
                            key={item.id}
                            onClick={() => setSelectedIdx(item.id)}
                            className={`calendarPeriod__select__content ${item.id === selectedIdx && "selected"}`}
                        >
                            <Text
                                fontSize="0.8125rem"
                                fontWeight="500"
                            >{item.text}</Text>
                        </div>
                    ))}
                </div>
                { selectedIdx === 4 && (
                    <div>
                        <Period 
                            tmpPeriod={tmpPeriod}
                            setTmpPeriod={setTmpPeriod}
                        />
                    </div>
                )}
            </div>
            <div className="calendarPeriod__btn">
                <Button 
                    backgroundColor="#D9D9D9"
                    color="#5F5F5F"
                    size="sm"
                    onClick={initializePeriod}
                >{CALENDAR_PERIOD_BTN.initialize}</Button>
                <Button 
                    backgroundColor="#2B2B2B"
                    color="#fff"
                    size="md"
                    onClick={handlePeriod}
                >{CALENDAR_PERIOD_BTN.apply}</Button>
            </div>
        </div>
    )
};