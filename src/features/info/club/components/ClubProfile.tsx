import { Text } from "@/components/atoms/text";
import { IMAGES } from "@/constants/images";
import { COLORS } from "@/styles";
import Image from "next/image";
import "./ClubInfo.css";

export const ClubProfile = () => {
    return(
        <div className="clubProfile">
            <div className="clubProfile__img">
                <Image 
                    src={IMAGES.profile}
                    alt="profile"
                />
            </div>
            <Text
                color={COLORS.main}
                fontSize="1.0625rem"
            >파주배드민턴소모임</Text>
        </div>
    )
};