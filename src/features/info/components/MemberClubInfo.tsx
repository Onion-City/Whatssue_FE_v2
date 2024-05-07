"use client";

import { Text } from "@/components/atoms/text";
import { RouterBtn } from "@/components/organisms/RouterBtn/RouterBtn";
import { ICONS } from "@/constants/images";
import { COLORS } from "@/styles";
import Image from "next/image";
import { MEMBERINFO_TXT } from "../constants";

export const MemberClubInfo = () => {
    return(
        <RouterBtn
            path="info/1"
        >
            <div className="memberInfoClub">
                <div className="memberInfoClub__clubName">
                    <span className="memberInfoClub__clubName__span">
                        <Image
                            src={ICONS.member}
                            alt="member"
                        />
                        <Text
                            color="#c2c2c2"
                            fontSize="0.8125rem"
                        >{MEMBERINFO_TXT.myClubTxt}</Text>
                    </span>
                    <Text
                        color={COLORS.white}
                        fontSize="0.8125rem"
                        fontWeight="700"
                    >파주배드민턴소모임안녕하세요^^</Text>
                </div>
                <div className="memberInfoClub__clubDate">
                    <span className="memberInfoClub__clubName__span">
                        <Image
                            src={ICONS.calendar}
                            alt="member"
                        />
                        <Text
                            color="#c2c2c2"
                            fontSize="0.8125rem"
                        >{MEMBERINFO_TXT.myClubDate}</Text>
                    </span>
                    <Text
                        color={COLORS.white}
                        fontSize="0.8125rem"
                        fontWeight="700"
                    >2024.03.05</Text>
                </div>
            </div>
        </RouterBtn>
    )
}