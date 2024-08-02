import { HeaderInfo } from "@/components/molecules/headerInfo";
import { Nav } from "@/components/organisms/Nav";
import MemberList from "./components/MemberList";

export default function SetupMemberList() {
  return (
    <>
      <HeaderInfo isBack={true} isClubInfo={true} />
      <MemberList />
      <Nav />
    </>
  );
}
