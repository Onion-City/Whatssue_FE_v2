import { HistoryHeader } from "@/components/organisms/Header"
import { Nav } from "@/components/organisms/Nav"
import { AbsentHeader } from "./components/AbsentHeader"
import { AbsentList } from "./components/AbsentList"

export const MemberAbsentInfo = () => {
    return(
        <>
            <HistoryHeader 
                title="공결 신청 내역"
            />
            <AbsentHeader />
            <AbsentList />
            <Nav />
        </>
    )
}