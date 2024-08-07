import { Text } from "@/components/atoms/text";
import { BottomSheet } from "@/components/organisms/BottomSheet/BottomSheet";
import { ICONS } from "@/constants/images";
import { COLORS } from "@/styles";
import { ScheduleDate } from "@/types/schedule";
import Image from "next/image";
import { CALENDAR_FILTER_BTN } from "../constants/const";
import { useCalendarFilter } from "./CalendarFilterProvider";
import { CalendarPeriod } from "./CalendarPeriod";

import "./Calendar.css";

export interface CalendarFilterProps {
    refetchPeriodSchedule: ({ startDate, endDate }: ScheduleDate) => void;
}

export const CalendarFilter = ({
    refetchPeriodSchedule,
    hasToday = false
}: {
    refetchPeriodSchedule: ({ startDate, endDate }: ScheduleDate) => void;
    hasToday?: boolean;
}) => {
    const {openFloating, setOpenFloating, isPeriod, period} = useCalendarFilter();

    return(
        <>
            <div className="calendarFilter">
                {hasToday && 
                    <span className="calendarFilter__btn">
                        <Image 
                            src={ICONS.back}
                            alt="back"
                        />
                        <Text
                            color={COLORS.white}
                            fontSize="0.6875rem"
                            fontWeight="300"
                        >{CALENDAR_FILTER_BTN.today}</Text>
                    </span>
                }
                <span onClick={() => setOpenFloating(true)}>
                    <Image 
                        src={ICONS.filter}
                        alt="filter"
                    />
                    {isPeriod ? (
                        <Text
                            color={COLORS.main}
                            fontSize="0.8125rem"
                            fontWeight="500"
                        >{period.startDate} ~ {period.endDate}</Text>
                    ) : (
                        <Text
                            color={COLORS.white}
                            fontSize="0.8125rem"
                            fontWeight="500"
                        >{CALENDAR_FILTER_BTN.period}</Text>
                    )}
                </span>
            </div>
            {hasToday && <div className="calendarFilter__line"></div>}
            {/* bottomSheet */}
            {openFloating && (
                <BottomSheet 
                    color="white"
                    setOpenFloating={setOpenFloating}
                >
                    <CalendarPeriod 
                        refetchPeriodSchedule={refetchPeriodSchedule}
                    />
                </BottomSheet>
            )}
        </>
    )
};