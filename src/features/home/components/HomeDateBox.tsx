import { Text } from "@/components/atoms/text";
import { ScheduleBoxProps } from "@/types/schedule";
import "./Home.css";

const HomeDateBox = ({time, title, attendance, onClick}: ScheduleBoxProps) => {
    return (
        <div className="homeDateBox" onClick={onClick}>
            <div className="homeDateBox__content">
                <span className="homeDateBox__content__time">
                    <Text
                        color="#d9d9d9"
                        fontSize="0.8125rem"
                    >{time}</Text>
                </span>
                <span>
                    <Text
                        color="#fff"
                        fontSize="0.9375rem"
                        fontWeight="700"
                    >{title}</Text>
                </span>
            </div>
            <span className="homeDateBox__attend wd-20">
                <Text
                    color="#d9d9d9"
                    fontSize="0.8125rem"
                >{attendance}</Text>
            </span>
        </div>
    )
};

export default HomeDateBox;