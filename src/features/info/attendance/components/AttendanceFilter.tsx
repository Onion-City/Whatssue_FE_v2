"use client";
import Image from "next/image";

import { Text } from "@/components/atoms/text";
import { BottomSheet } from "@/components/organisms/BottomSheet/BottomSheet";
import { ICONS } from "@/constants/images";
import { CalendarFilterProps } from "@/features/home/calendar/components/CalendarFilter";
import { CalendarPeriod } from "@/features/home/calendar/components/CalendarPeriod";
import { COLORS } from "@/styles";
import { useState } from "react";
import { ATTEND_FILTER } from "../constants";

export const AttendanceFilter = ({refetchPeriodSchedule}: CalendarFilterProps) => {
    const [openFloating, setOpenFloating] = useState(false);
    // const {openFloating, setOpenFloating, isPeriod, period} = useCalendarFilter();
    return(
        <div className="attendFilter">
            <Text
                color={COLORS.main}
                fontSize="0.875rem"
            >2024년 3월 ~ 2024년 6월</Text>
            <div 
                className="attendFilter__btn"
                onClick={() => setOpenFloating(true)}
            >
                <Image 
                    src={ICONS.filter}
                    alt="filter"
                />
                <Text
                    color="#fff"
                    fontSize="0.8125rem"
                    fontWeight="500"
                >{ATTEND_FILTER}</Text>
            </div>

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
        </div>
    )
}