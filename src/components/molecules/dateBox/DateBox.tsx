import { Text } from "@/components/atoms/text";
import { COLORS } from "@/styles";

import moment from "moment";
import "./DateBox.css";

interface DateBoxProps {
    date: string | null;
    children: React.ReactNode;
}

export const DateBox = ({date, children}: DateBoxProps) => {
    return (
        <div className="dateBox">
            <div className="dateBox__title">
                <Text
                    color={COLORS.white}
                    fontSize="1.0625rem"
                >{moment(date, "YYYY-MM-DD").format("YYYY년 MM월 DD일")}</Text>
            </div>
            {children}
        </div>
    )
}