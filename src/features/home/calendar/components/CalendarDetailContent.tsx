import { Text } from "@/components/atoms/text";
import { formatDate, formatTime } from "@/utils/date";
import { CALENDAR_DETAIL_TXT } from "../constants/const";
import "./Calendar.css";

const CalendarDetailContent = () => {
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
    
        const renderDetailBox = (label: string, value: string) => (
            <div className="calendarDetailContent__box">
                <span className="wd-20">
                    <Text color="#fff" fontSize="0.9375rem" fontWeight="500">
                        {label}
                    </Text>
                </span>
                <span className="wd-80">
                    <Text color="#fff" fontSize="0.9375rem" fontWeight="500">
                        {value}
                    </Text>
                </span>
            </div>
        );
    
        return (
            <div className="calendarDetailContent">
                {renderDetailBox(CALENDAR_DETAIL_TXT.date, formatDate(dateDetail.time))}
                {renderDetailBox(CALENDAR_DETAIL_TXT.time, formatTime(dateDetail.time))}
                {renderDetailBox(CALENDAR_DETAIL_TXT.location, dateDetail.location)}
                {renderDetailBox(CALENDAR_DETAIL_TXT.content, dateDetail.content)}
            </div>
        );
};

export default CalendarDetailContent;