"use client";

import { Text } from "@/components/atoms/text";
import { RouterBtn } from "@/components/organisms/RouterBtn/RouterBtn";
import { ICONS } from "@/constants/images";
import Image from "next/image";
import React from "react";
import { MEMBERINFO_BOARD_LIST, MEMBERINFO_LIST } from "../constants";

export const MemberListInfo = () => {
    return(
        <div className="memberInfoList">
            {MEMBERINFO_LIST.map((txt) => (
                <React.Fragment key={txt.idx}>
                    <RouterBtn
                        path={txt.path}
                    >
                        <div className="memberInfoList__box">
                            <Text
                                color="#fff"
                                fontSize="0.9375rem"
                            >{txt.title}</Text>
                            <Image 
                                src={ICONS.arrowRight}
                                alt="arrow"
                            />
                        </div>
                    </RouterBtn>
                </React.Fragment>
            ))}
            <div className="memberInfoList__line"></div>
            {MEMBERINFO_BOARD_LIST.map((txt) => (
                <React.Fragment key={txt.idx}>
                    <RouterBtn
                        path={txt.path}
                    >
                        <div className="memberInfoList__box">
                            <Text
                                color="#fff"
                                fontSize="0.9375rem"
                            >{txt.title}</Text>
                            <Image 
                                src={ICONS.arrowRight}
                                alt="arrow"
                            />
                        </div>
                    </RouterBtn>
                </React.Fragment>
            ))}
        </div>
    )
}