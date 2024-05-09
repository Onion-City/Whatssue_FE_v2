"use client";

import { Text } from "@/components/atoms/text";
import { BottomSheet } from "@/components/organisms/BottomSheet/BottomSheet";
import { ICONS } from "@/constants/images";
import Image from "next/image";
import { useState } from "react";
import { ABSENT_FILTER } from "../constants";

import "./MemberAbsent.css";

export const AbsentHeader = () => {
    const [openFloating, setOpenFloating] = useState(false);
    return(
        <div className="absentHeader">
            <span 
                className="absentHeader__wrapper"
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
                >{ABSENT_FILTER}</Text>
            </span>
            <div className="absentHeader__line"></div>

            {openFloating && (
                <BottomSheet
                    color="white"    
                    setOpenFloating={setOpenFloating}
                >
                    <div></div>
                </BottomSheet>
            )}
        </div>
    )
}