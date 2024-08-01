import { HeaderInfo } from "@/components/molecules/headerInfo";
import { Nav } from "@/components/organisms/Nav";
import Board from "./components/Board";

export default function SetupNoticeBoard() {
  return (
    <>
      <HeaderInfo isBack={true} isSearch={true} content="공지 게시판" />
      <Board />
      <Nav />
    </>
  );
}
