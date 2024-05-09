import { Text } from "@/components/atoms/text";
import { COLORS } from "@/styles";
import { formatDateKor } from "@/utils/date";

import "./DateBox.css";

interface DateBoxProps {
    date: Date;
    children: React.ReactNode;
}

export const DateBox = ({date, children}: DateBoxProps) => {
    return (
        <div className="dateBox">
            <div className="dateBox__title">
                <Text
                    color={COLORS.white}
                    fontSize="1.0625rem"
                >{formatDateKor(date)}</Text>
            </div>
            {children}
        </div>
    )
}