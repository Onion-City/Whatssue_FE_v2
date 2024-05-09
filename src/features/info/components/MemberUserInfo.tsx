import { Text } from "@/components/atoms/text";
import { ICONS, IMAGES } from "@/constants/images";
import Image from "next/image";
import { MEMBERINFO_TXT } from "../constants";
import "./MemberInfo.css";

export const MemberUserInfo = () => {
    return(
        <section className="memberInfoUser">
            <div className="memberInfoUser__content">
                <span className="memberInfoUser__content-img">
                    <Image 
                        src={IMAGES.profile}
                        alt="profile"
                    />
                </span>
                <div className="memberInfoUser__content__txt">
                    <div className="memberInfoUser__content__txt-title">
                        <Text
                            color="#fff"
                            fontWeight="700"
                            fontSize="0.9375rem"
                        >김민서</Text>
                        <span className="memberInfoUser__content__txt__role">
                            <Text
                                color="#2b2b2b"
                                fontSize="0.5625rem"
                            >일반</Text>
                        </span>
                        <Image 
                            src={ICONS.edit}
                            alt="edit"
                        />
                    </div>
                    <span className="memberInfoUser__content__txt-explain">
                        <Text
                            color="#fff"
                            fontSize="0.6875rem"
                            fontWeight="500"
                        >배드민턴 왕이다 깝치지 말아라</Text>
                    </span>
                </div>
            </div>
            <span className="memberInfoUser__btn">
                <Text
                    color="#fff"
                    fontSize="0.6875rem"
                    fontWeight="500"
                >{MEMBERINFO_TXT.clubChnBtn}</Text>
            </span>
        </section>
    )
}