"use client";
import { useClubsInfoQuery } from "@/hook/club/useClubsInfoQuery";
import { ManagerListInfo } from "./ManagerListInfo";
import { MemberClubInfo } from "./MemberClubInfo";
import { MemberListInfo } from "./MemberListInfo";
import { MemberUserInfo } from "./MemberUserInfo";

export const MemberContent = ({
    role
}: {
    role: 'MEMBER' | 'MANAGER'
}) => {
    const { data: clubInfo } = useClubsInfoQuery({
        clubId: 1
    });
    console.log(clubInfo);
    return(
        <div className="memberInfoContent">
            <MemberUserInfo />
            <MemberClubInfo />
            {role === 'MEMBER' ? <MemberListInfo /> : <ManagerListInfo />}
        </div>
    )
}