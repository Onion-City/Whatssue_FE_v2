"use client";
import { Button } from "@/components/atoms/button";
import { HistoryHeader } from "@/components/organisms/Header";
import { Wrapper } from "@/components/organisms/Wrapper";
import { ClubInfo } from "@/features/info/club/components/ClubInfo";
import { ClubProfile } from "@/features/info/club/components/ClubProfile";
import { useClubsInfoQuery } from "@/hook/club/useClubsInfoQuery";
import { useJoinClubMutation } from "@/hook/clubJoin/useJoinClubMutation";
import { JOIN_BTN } from "../constants/const";

const InvitationClub = () => {
  const params = {
    clubId : 7
  }
  const { data: infoData, isLoading, isError } = useClubsInfoQuery(params);
  const { mutate } = useJoinClubMutation(7);
  console.log(infoData);

  const {
      clubName,
      clubIntro,
      isPrivate,
      contactMeans,
      namePolicy,
      clubProfileImage,
      memberCount
  } = infoData?.data || {};

  const profiles = {
      clubName: clubName,
      clubProfileImage: clubProfileImage
  };

  const infos = {
      clubIntro: clubIntro,
      isPrivate: isPrivate,
      contactMeans: contactMeans,
      namePolicy: namePolicy,
      memberCount: memberCount
  }

  const handleJoinClub = () => {
    console.log('모임 가입 신청');
    mutate();
  }
  return (
    <> 
      {!profiles && !infos ? (
        <div>Loading...</div>
      ): (
        <Wrapper>
          <div className="memberClubInfo">
            <HistoryHeader />
            <ClubProfile 
              profiles={profiles}
            />
            <ClubInfo
              infos={infos}
            />
          </div>
          <div>
            <Button 
              type="button"
              onClick={handleJoinClub}
            >{JOIN_BTN.join}</Button>
          </div>
        </Wrapper>
      )}
    </>
  )
}

export default InvitationClub;