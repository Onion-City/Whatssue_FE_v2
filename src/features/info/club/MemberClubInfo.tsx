import { HistoryHeader } from "@/components/organisms/Header";
import { Nav } from "@/components/organisms/Nav";
import { ClubInfo } from "./components/ClubInfo";
import "./components/ClubInfo.css";
import { ClubProfile } from "./components/ClubProfile";

export const MemberClubInfo = () => {
    return(
        <div className="memberClubInfo">
            <HistoryHeader />
            <ClubProfile />
            <ClubInfo />
            <Nav />
        </div>
    )
}