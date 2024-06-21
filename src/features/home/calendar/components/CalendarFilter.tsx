import { Text } from "@/components/atoms/text";
import { BottomSheet } from "@/components/organisms/BottomSheet/BottomSheet";
import { ICONS } from "@/constants/images";
import { COLORS } from "@/styles";
import Image from "next/image";
import { CALENDAR_FILTER_BTN } from "../constants/const";
import { useCalendarFilter } from "./CalendarFilterProvider";
import { CalendarListHeaderProps } from "./CalendarListHeader";
import { CalendarPeriod } from "./CalendarPeriod";

export const CalendarFilter = ({
    refetchSchedule
}: CalendarListHeaderProps) => {
    const {openFloating, setOpenFloating, isPeriod, period} = useCalendarFilter();

    return(
        <>
            <div className="calendarFilter">
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
            <div className="calendarFilter__line"></div>
            {/* bottomSheet */}
            {openFloating && (
                <BottomSheet 
                    color="white"
                    setOpenFloating={setOpenFloating}
                >
                    <CalendarPeriod 
                        refetchSchedule={refetchSchedule}
                    />
                </BottomSheet>
            )}
        </>
    )
};