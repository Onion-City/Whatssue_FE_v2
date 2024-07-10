"use client";

import { useAbsenceMemberQuery } from "@/hook/absence/useAbsencesMemberQuery";
import { useMyAbsenceQuery } from "@/hook/absence/useMyAbsencesQuery";
import { AbsenceMemberData } from "@/types/absence/types";
import React from "react";
import { AbsentBox } from "./AbsentBox";

export const AbsentList = () => {
    // 공결 신청 내역 (MANAGER)
    const { data } = useAbsenceMemberQuery({
        clubId : 1,
        page: 0,
        size: 10
    });

    console.log(data?.data.memberAbsences.content);
    console.log(data?.data.doneAbsences.content);

    // 내 공결 신청 내역
    const { data: myList } = useMyAbsenceQuery({
        clubId : 1,
        page: 0,
        size: 10
    });

    console.log(myList?.data.content);
    return(
        <>
            {myList?.data?.content?.map((item: AbsenceMemberData) => 
                <React.Fragment key={item.id}>
                    <AbsentBox
                        data={item}
                    />
                </React.Fragment>
            )}
        </>
    )
}