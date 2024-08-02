"use client";
import useClubMemberInfoQuery from "@/hook/info/useClubMemberInfoQuery";
import { FormatClubId } from "@/utils/extractPathElements";
import { ManagerListInfo } from "./ManagerListInfo";
import { MemberClubInfo } from "./MemberClubInfo";
import { MemberListInfo } from "./MemberListInfo";
import { MemberUserInfo } from "./MemberUserInfo";

export const MemberContent = () => {
    const clubId = FormatClubId();
    const { data: clubInfo } = useClubMemberInfoQuery({
        clubId: clubId
    });
    console.log(clubInfo?.data);

    return(
        <div className="memberInfoContent">
            {
                clubInfo &&
                clubInfo.data &&
                (
                    <>
                        <MemberUserInfo 
                            memberName={clubInfo?.data?.memberName}
                            memberProfileImage={clubInfo?.data?.memberProfileImage}
                            role={clubInfo?.data?.role}
                            memberIntro={clubInfo?.data?.memberIntro}
                        />
                        <MemberClubInfo 
                            clubName={clubInfo?.data?.clubName}
                            createAt={clubInfo?.data?.createAt}
                        />
                        {clubInfo?.data?.role === 'MEMBER' ? <MemberListInfo /> : <ManagerListInfo />}
                    </>
                )
            }
        </div>
    )
}