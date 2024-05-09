"use client";
import Image from "next/image";
import { useState } from "react";

import { Text } from "@/components/atoms/text";
import { BottomSheet } from "@/components/organisms/BottomSheet/BottomSheet";
import { ICONS } from "@/constants/images";
import { COLORS } from "@/styles";
import { ATTEND_FILTER } from "../constants";

export const AttendanceFilter = () => {
    const [openFloating, setOpenFloating] = useState(false);
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
                    <div>기간 설정</div>
                </BottomSheet>
            )}
        </div>
    )
}