"use client";
import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import { COLORS } from "@/styles";
import Image from "next/image";

interface ClubInfoBoxProps {
    title: string;
    content: string | string[] | undefined;
    isCopy: boolean;
    isFirst: boolean;
}

export const ClubInfoBox = ({title, content, isCopy, isFirst}: ClubInfoBoxProps) => {
    // 클립보드 복사
    const copyToClipboard = async (text: string | undefined) => {
        try {
            if(text){
                await navigator.clipboard.writeText(text);
            }
            alert('클립보드에 복사되었습니다.');
        } catch (err) {
            console.error('클립보드 복사 실패:', err);
        }
    };
    const renderContent = (item: string | undefined, index: number) => (
        <div key={index} className={`clubInfoBox__box ${isCopy && "copy"}`}>
            <Text
                color={COLORS.white}
                fontSize="0.8125rem"
                fontWeight="500"
            >{item}</Text>
            {isCopy && (
                <div onClick={() => copyToClipboard(item)}>
                    <Image 
                        src={ICONS.copy}
                        alt="copy"
                    />
                </div>
            )}
        </div>
    );
    console.log(isFirst);

    return(
        <div className="clubInfoBox">
            <div className="clubInfoBox__modify">
                <Text
                    color="#C2C2C2"
                    fontSize="0.9375rem"
                >{title}</Text>
                {
                    // TODO: 관리자인 경우
                    isFirst && 
                    <span className="clubInfoBox__modify-box">
                        <Text
                            fontSize="0.625rem"
                        >수정</Text>
                    </span>
                }  
                </div>
            {Array.isArray(content) ? content.map(renderContent) : renderContent(content, 0)}
        </div>
    );
};
