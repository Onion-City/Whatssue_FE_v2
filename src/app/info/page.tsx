"use client";
import { HeaderInfo } from "@/components/molecules/headerInfo";
import ManagerInfo from "@/features/info/ManagerInfo";
import MemberInfo from "@/features/info/MemberInfo";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const InfoPage = () => {
  const role = useSelector((state: RootState) => state.club.children.role);
  return (
    <>
      {/* <MemberInfo /> */}
      <HeaderInfo isClubInfo={true} isMyInfo={true} />
      {role === "MANAGER" ? <ManagerInfo /> : <MemberInfo />}
    </>
  );
};

export default InfoPage;
