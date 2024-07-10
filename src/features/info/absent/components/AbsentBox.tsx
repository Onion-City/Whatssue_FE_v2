import { Text } from "@/components/atoms/text";
import { Absence, AbsenceMemberData } from "@/types/absence/types";
import { ABSENT_BOX } from "../constants";

interface AbsenceProps {
    data: AbsenceMemberData
};

export const AbsentBox = ({data}: AbsenceProps) => {
    console.log(data);
    return(
        <div className="absentBox">
            <span className="absentBox__status">
                <Text
                    color="#2B2B2B"
                    fontSize="0.5625rem"
                >{Absence[data.officialAbsenceRequestType]}</Text>
            </span>
            <Text
                color="#FFFFFF"
                fontSize="1.1875rem"
            >{data.officialAbsenceContent}</Text>
            <div className="absentBox__date">
                <Text
                    color="#FFFFFF"
                    fontSize="0.75rem"
                    fontWeight="500"
                >{ABSENT_BOX.createAt}</Text>
                <Text
                    color="#FFFFFF"
                    fontSize="0.75rem"
                    fontWeight="500"
                >{data.createAt}</Text>
            </div>
        </div>
    )
}