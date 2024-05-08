import { Nav } from "@/components/organisms/Nav"
import { AbsentHeader } from "./components/AbsentHeader"
import { AbsentList } from "./components/AbsentList"

export const MemberAbsentInfo = () => {
    return(
        <>
            <AbsentHeader />
            <AbsentList />
            <Nav />
        </>
    )
}