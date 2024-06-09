import { Text } from "@/components/atoms/text";
import { IMAGES } from "@/constants/images";
import { COLORS } from "@/styles";
import { ClubProfiles } from "@/types/club";
import Image from "next/image";

import "./ClubInfo.css";

interface ClubProfileProp {
    profiles: ClubProfiles;
};

export const ClubProfile = ({ profiles }: ClubProfileProp) => {
    return(
        <div className="clubProfile">
            <div className="clubProfile__img">
                <Image 
                    src={profiles?.clubProfileImage ?? IMAGES.profile}
                    alt="profile"
                    width={50}
                    height={50}
                />
            </div>
            <Text
                color={COLORS.main}
                fontSize="1.0625rem"
            >{profiles?.clubName}</Text>
        </div>
    )
};