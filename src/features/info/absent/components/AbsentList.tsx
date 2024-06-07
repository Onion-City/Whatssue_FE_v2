import { DateBox } from "@/components/molecules/dateBox"
import { AbsentBox } from "./AbsentBox"

export const AbsentList = () => {
    return(
        <>
            <DateBox
                date="YYYY-MM"
            >
                <AbsentBox />
            </DateBox>
            <DateBox
                date="YYYY-MM"
            >
                <AbsentBox />
            </DateBox>
        </>
    )
}