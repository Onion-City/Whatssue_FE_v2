"use client";

import { Text } from "@/components/atoms/text";
import { RouterBtn } from "@/components/organisms/RouterBtn/RouterBtn";
import { ICONS } from "@/constants/images";
import { COLORS } from "@/styles";
import moment from "moment";
import Image from "next/image";
import { MEMBERINFO_TXT } from "../constants";

export const MemberClubInfo = ({
    clubName,
    createAt
}: {
    clubName: string;
    createAt: string
}) => {
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
                    >{clubName}</Text>
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
                    >{moment(createAt).format("YYYY.MM.DD")}</Text>
                </div>
            </div>
        </RouterBtn>
    )
}