import { Text } from "@/components/atoms/text";
import { useRouter } from "next/navigation";
import React from "react";
import "./Home.css";
import HomeDateBox from "./HomeDateBox";

const HomeDateWrapper = () => {
    const router = useRouter();
    const dateList = [
        {
            id: 1,
            time: new Date(),
            title: "UI 회의"
        },
        {
            id: 2,
            time: new Date(),
            title: "와이어 프레임 작성 회의"
        },
        {
            id: 3,
            time: new Date(),
            title: "백엔드 회의"
        },
    ]
    return (
        <div className="homeDateWrapper">
            <div className="homeDateWrapper__header">
                <Text
                    color="#fff"
                    fontSize="1.0625rem"
                    fontWeight="700"
                >2024년 3월 2일 월요일</Text>
                <Text
                    color="#fff"
                    fontSize="0.6875rem"
                    onClick={() => router.push('/1/calendar')}
                >더보기</Text>
            </div>
            {dateList?.map((date) => (
                <React.Fragment key={date.id}>
                    <HomeDateBox
                        time={date.time}
                        title={date.title}
                    />
                </React.Fragment>
            ))}
        </div>
    )
};

export default HomeDateWrapper;