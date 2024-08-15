"use client";

import { HistoryHeader } from "@/components/organisms/Header";
import { Nav } from "@/components/organisms/Nav";
import { useClubsInfoQuery } from "@/hook/club/useClubsInfoQuery";
import { ClubInfo } from "./components/ClubInfo";
import { ClubProfile } from "./components/ClubProfile";

import { RootState } from "@/redux/store";
import { FormatClubId } from "@/utils/extractPathElements";
import { useSelector } from "react-redux";
import "./components/ClubInfo.css";
import { ClubPrivateInfo } from "./components/ClubPrivateInfo";
export const MemberClubInfo = () => {
  const clubId = FormatClubId();
  const params = {
    clubId: clubId,
  };
  const { data: infoData, isLoading, isError } = useClubsInfoQuery(params);

  const role = useSelector((state: RootState) => state.club.children.role);

  console.log(infoData);

  const {
    clubName,
    clubIntro,
    isPrivate,
    contactMeans,
    namePolicy,
    clubProfileImage,
    memberCount,
    createdAt,
    link,
    privateCode,
  } = infoData?.data || {};

  const profiles = {
    clubName: clubName,
    clubProfileImage: clubProfileImage,
  };

  const infos = {
    clubIntro: clubIntro,
    isPrivate: isPrivate,
    contactMeans: contactMeans,
    namePolicy: namePolicy,
    memberCount: memberCount,
    createdAt: createdAt,
    link: link,
    privateCode: privateCode,
  };

  const privateInfos = {
    isPrivate: isPrivate,
    privateCode: privateCode,
  };

  return (
    <>
      <HistoryHeader />
      {!profiles && !infos && !privateInfos ? (
        <div>Loading...</div>
      ) : (
        <div className="memberClubInfo">
          <ClubProfile profiles={profiles} />
          <ClubInfo infos={infos} />
          {/* MANAGER만 */}
          {role === "MANAGER" && (
            <ClubPrivateInfo privateInfos={privateInfos} />
          )}
        </div>
      )}
      <Nav />
    </>
  );
};
