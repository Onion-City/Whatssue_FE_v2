import { HeaderInfo } from "@/components/molecules/headerInfo";
import { RegisBoard } from "./components/RegisBoard";

export default function SetupRegisBoard() {
  return (
    <>
      <HeaderInfo isBack={true} content="글쓰기" />
      <RegisBoard />
    </>
  );
}
