import { Nav } from "@/components/organisms/Nav";
import { Wrapper } from "@/components/organisms/Wrapper";
import { MemberBtn } from "./components/MemberBtn";
import { MemberContent } from "./components/MemberContent";

export default function MemberInfo () {
    return(
        <>
            <Wrapper isHeader={true}>
                <MemberContent />
                <div>
                    <MemberBtn />
                    <Nav />
                </div>
            </Wrapper>
        </>

    )
}