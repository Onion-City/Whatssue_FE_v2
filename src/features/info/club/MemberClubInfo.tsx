import { Nav } from "@/components/organisms/Nav";
import { ClubInfo } from "./components/ClubInfo";
import "./components/ClubInfo.css";
import { ClubProfile } from "./components/ClubProfile";

export const MemberClubInfo = () => {
    return(
        <div>
            <ClubProfile />
            <ClubInfo />
            <Nav />
        </div>
    )
}