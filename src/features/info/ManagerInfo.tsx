import { Nav } from "@/components/organisms/Nav";
import { Wrapper } from "@/components/organisms/Wrapper";
import { MemberBtn } from "./components/MemberBtn";
import { MemberContent } from "./components/MemberContent";

export default function ManagerInfo() {
  return (
    <>
      <Wrapper isHeader={true}>
        <div style={{ marginTop: "4.25rem" }}>
          <MemberContent />
        </div>
        <div className="memberInfo">
          <MemberBtn />
          <Nav />
        </div>
      </Wrapper>
    </>
  );
}
