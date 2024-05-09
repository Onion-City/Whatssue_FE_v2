import { Text } from "@/components/atoms/text";

import React from "react";
import "./MemberAttendance.css";

interface AttendMonthProps {
    date: string;
    children: React.ReactNode;
};

export const AttendanceMonth = ({date, children}: AttendMonthProps) => {
    return(
        <div className="attendMonth">
            <Text
                color="#fff"
                fontSize="1.1875rem"
            >{date}</Text>
            {children}
        </div>
    )
}