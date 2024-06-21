"use client";

import { DateBox } from "@/components/molecules/dateBox";
import { useAbsenceMemberQuery } from "@/hook/absence/useAbsencesMemberQuery";
import { AbsentBox } from "./AbsentBox";

export const AbsentList = () => {
    const { data } = useAbsenceMemberQuery({
        clubId : 1,
        clubMemberId: 19
    });

    console.log(data);
    return(
        <>
            <DateBox
                date="2024-06-14"
            >
                <AbsentBox />
            </DateBox>
            <DateBox
                date="2024-06-14"
            >
                <AbsentBox />
            </DateBox>
        </>
    )
}