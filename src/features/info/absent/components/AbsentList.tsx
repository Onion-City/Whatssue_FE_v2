import { DateBox } from "@/components/molecules/dateBox"
import { AbsentBox } from "./AbsentBox"

export const AbsentList = () => {
    return(
        <>
            <DateBox
                date={new Date()}
            >
                <AbsentBox />
            </DateBox>
            <DateBox
                date={new Date()}
            >
                <AbsentBox />
            </DateBox>
            <DateBox
                date={new Date()}
            >
                <AbsentBox />
                <AbsentBox />
            </DateBox>
        </>
    )
}