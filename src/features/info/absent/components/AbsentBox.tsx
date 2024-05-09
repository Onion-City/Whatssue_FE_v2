import { Text } from "@/components/atoms/text"
import { formatDateKor } from "@/utils/date"

export const AbsentBox = () => {
    return(
        <div className="absentBox">
            <span className="absentBox__status">
                <Text
                    color="#2B2B2B"
                    fontSize="0.5625rem"
                >미승인</Text>
            </span>
            <Text
                color="#FFFFFF"
                fontSize="1.1875rem"
            >와이어 프레임 작성 회의</Text>
            <div className="absentBox__date">
                <Text
                    color="#FFFFFF"
                    fontSize="0.9375rem"
                >{formatDateKor(new Date())}</Text>
                <Text
                    color="#d9d9d9"
                    fontSize="0.8125rem"
                >11:00 AM</Text>
            </div>
        </div>
    )
}