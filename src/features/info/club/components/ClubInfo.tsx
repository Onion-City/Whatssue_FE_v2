import { Text } from "@/components/atoms/text"
import { ICONS } from "@/constants/images"
import Image from "next/image"
import React from "react"
import { CLUBINFO_TXT } from "../constants"
import { ClubInfoBox } from "./ClubInfoBox"


interface ClubInfoTypes {
    id: number;
    title: string;
    content: string | string[];
    isCopy: boolean;
}

export const ClubInfo = () => {
    const clubInfoList: ClubInfoTypes[] = [
        {
            id: 0,
            title: CLUBINFO_TXT[0],
            content: "미안하다 이거 보여주려고 어그로 끌었다.. 나루토 사스케 싸움수준 ㄹㅇ 실화냐? 진짜 세계관 최강자들의 싸운이다..",
            isCopy: false
        },
        {
            id: 1,
            title: CLUBINFO_TXT[1],
            content: "010-1234-5678",
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
                >50명</Text>
                <span className="clubInfo__line">|</span>
                <Text
                    color="#c2c2c2"
                    fontSize="0.8125rem"
                    fontWeight="500"
                >실명제</Text>
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