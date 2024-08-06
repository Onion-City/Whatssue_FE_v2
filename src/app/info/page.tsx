"use client";
import { HeaderInfo } from "@/components/molecules/headerInfo";
import ManagerInfo from "@/features/info/ManagerInfo";

const InfoPage = () => {
  return (
    <>
      {/* <MemberInfo /> */}
      <HeaderInfo isClubInfo={true} isMyInfo={true} />
      <ManagerInfo />
    </>
  );
};

export default InfoPage;
