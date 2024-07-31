"use client";
import ManagerInfo from "@/features/info/ManagerInfo";
import { FormatClubMemberInfo } from "@/utils/extractPathElements";

const InfoPage = () => {
  const { role } = FormatClubMemberInfo();
  console.log(role);
  return (
    <>
      {/* <MemberInfo /> */}
      <ManagerInfo />
    </>
  );
};

export default InfoPage;
