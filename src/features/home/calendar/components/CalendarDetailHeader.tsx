import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import { formatDateTime } from "@/utils/date";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./Calendar.css";

const CalendarDetailHeader = () => {
    const router = useRouter();
    const dateDetail =
        {
            id: 1,
            time: new Date(),
            user: "문해빈",
            title: "와이어 프레임 작성 회의",
            location: "커피빈 홍대입구점",
            content: "유저 플로우 기반으로 와이어프레임 작성하겠습니다. 테블릿 PC 지참해주세요 :) 출석은 정시에 가차없이 진행할 예정입니다. 지각 시에는 벌금 6000만원 있으니 참고하시어 늦지 마시길 ~ 모두 이따 봅시다",
            attendance: 0, // 미출석
        }
    
    return (
        <div className="calendarDetailHeader">
            <div className="calendarDetailHeader__title">
                <Image 
                    src={ICONS.calendar}
                    alt="calendar"
                />
                <Text
                    color="#fff"
                    fontSize="1.3125rem"
                    fontWeight="700"
                >{dateDetail.title}</Text>
            </div>
            <div className="calendarDetailHeader__content">
                <div className="calendarDetailHeader__content__user">
                    <span>
                        프사
                    </span>
                    <Text
                        color="#fff"
                        fontSize="0.6875rem"
                    >{dateDetail.user}</Text>
                    <Text
                        color="#d9d9d9"
                        fontSize="0.6875rem"
                        fontWeight="500"
                    >{formatDateTime(dateDetail.time)}</Text>
                </div>
                <Text color="#fff">미출석</Text>
            </div>
            <div className="calendarDetailHeader__line"></div>
        </div>
    )
};

export default CalendarDetailHeader;