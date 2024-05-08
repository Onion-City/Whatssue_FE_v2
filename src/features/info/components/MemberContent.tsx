import { MemberClubInfo } from "./MemberClubInfo"
import { MemberListInfo } from "./MemberListInfo"
import { MemberUserInfo } from "./MemberUserInfo"

export const MemberContent = () => {
    return(
        <div className="memberInfoContent">
            <MemberUserInfo />
            <MemberClubInfo />
            <MemberListInfo />
        </div>
    )
}