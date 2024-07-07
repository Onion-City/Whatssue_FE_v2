"use client";

import { DateBox } from "@/components/molecules/dateBox";
import { useAbsenceMemberQuery } from "@/hook/absence/useAbsencesMemberQuery";
import { useMyAbsenceQuery } from "@/hook/absence/useMyAbsencesQuery";
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
            <DateBox
                date="2024-06-14"
            >
                <AbsentBox 
                    // scheduleId={scheduleId}
                    // officialAbsenceRequestType={officialAbsenceRequestType}
                />
            </DateBox>
            <DateBox
                date="2024-06-14"
            >
                <AbsentBox />
            </DateBox>
        </>
    )
}