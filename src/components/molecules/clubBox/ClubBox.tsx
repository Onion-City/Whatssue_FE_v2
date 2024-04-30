import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import { COLORS } from "@/styles";
import Image from "next/image";
import "./ClubBox.css";

interface ClubBoxProps {
    children: React.ReactNode;
    clubImg: string;
}

export const ClubBox = ({clubImg, children}: ClubBoxProps) => {
    return (
        <span className="clubBox">
            <span className="clubBox__info">
                <Image 
                    src={clubImg}
                    alt="profile"
                />
                <Text
                    color={COLORS.white}
                    fontSize="1.0625rem"
                    fontWeight="500"
                >{children}</Text>
            </span>
            <Image 
                src={ICONS.exchange}
                alt="exchange"
            />
        </span>
    )
}