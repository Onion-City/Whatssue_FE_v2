import { HeaderInfo } from "@/components/molecules/headerInfo";
import { Nav } from "@/components/organisms/Nav";
import BoardList from "./components/BoardList";

export default function SetupUserBoardList() {
  return (
    <div>
      <>
        <HeaderInfo isClubInfo={true} isMyInfo={true} />
        <BoardList />
      </>
      <Nav />
    </div>
  );
}
