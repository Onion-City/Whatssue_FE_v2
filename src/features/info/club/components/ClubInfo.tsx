"use client";

import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import { ClubInfos } from "@/types/club";
import Image from "next/image";
import React from "react";
import { CLUBINFO_TXT } from "../constants";
import { ClubInfoBox } from "./ClubInfoBox";


interface ClubInfoTypes {
    id: number;
    title: string;
    content: string | string[] | undefined;
    isCopy: boolean;
};

interface ClubInfoProps {
    infos: ClubInfos
};

export const ClubInfo = ({ infos }: ClubInfoProps) => {
    const clubInfoList: ClubInfoTypes[] = [
        {
            id: 0,
            title: CLUBINFO_TXT[0],
            content: infos?.clubIntro,
            isCopy: false
        },
        {
            id: 1,
            title: CLUBINFO_TXT[1],
            content: infos?.contactMeans,
            isCopy: true
        },
        {
            id: 2,
            title: CLUBINFO_TXT[2],
            content: ["https://github.com/", "https://naver.com"],
            isCopy: true
        },
    ]
    return(
        <div className="clubInfo">
            <div className="clubInfo__sub">
                <Image 
                    src={ICONS.member}
                    alt="member"
                />
                <Text
                    color="#c2c2c2"
                    fontSize="0.8125rem"
                    fontWeight="500"
                >{infos?.memberCount}명</Text>
                <span className="clubInfo__line">|</span>
                <Text
                    color="#c2c2c2"
                    fontSize="0.8125rem"
                    fontWeight="500"
                >{infos?.namePolicy === "NICK_NAME" ? "닉네임제" : "실명제"}</Text>
                <span className="clubInfo__line">|</span>
                <Text
                    color="#c2c2c2"
                    fontSize="0.8125rem"
                    fontWeight="500"
                >2023년 7월 29일 생성</Text>
            </div>
            <div>
                {clubInfoList?.map((item) => (
                    <React.Fragment key={item.id}>
                        <ClubInfoBox 
                            title={item.title}
                            content={item.content}
                            isCopy={item.isCopy}
                        />
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}