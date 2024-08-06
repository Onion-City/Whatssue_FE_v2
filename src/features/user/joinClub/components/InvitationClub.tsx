"use client";
import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import { HistoryHeader } from "@/components/organisms/Header";
import { Wrapper } from "@/components/organisms/Wrapper";
import { ICONS } from "@/constants/images";
import { ClubProfile } from "@/features/info/club/components/ClubProfile";
import { useJoinClubMutation } from "@/hook/clubJoin/useJoinClubMutation";
import { COLORS } from "@/styles";
import moment from "moment";
import Image from "next/image";
import { JOIN_BTN } from "../constants/const";

const InvitationClub = ({
  clubId,
  clubIntro,
  clubMemberCount,
  clubName,
  clubProfileImage,
  createdAt,
  namePolicy
}: {
  clubId: number;
  clubIntro: string;
  clubMemberCount: number;
  clubName: string;
  clubProfileImage: string;
  createdAt: string;
  namePolicy: "REAL_NAME" | "NICK_NAME";
}) => {
  const { mutate } = useJoinClubMutation(clubId);

  const profiles = {
      clubName: clubName,
      clubProfileImage: clubProfileImage
  };

  const infos = {
      clubIntro: clubIntro,
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
        <div className="invitationClub">
          <Wrapper>
          <div className="memberClubInfo">
            <HistoryHeader />
            <div className="invitationClub__content">
              <ClubProfile 
                profiles={profiles}
              />
              <div className="clubInfo__sub">
                <Image
                    src={ICONS.member}
                    alt="member"
                />
                <Text
                    color="#c2c2c2"
                    fontSize="0.8125rem"
                    fontWeight="500"
                >{clubMemberCount}명</Text>
                <span className="clubInfo__line">|</span>
                <Text
                    color="#c2c2c2"
                    fontSize="0.8125rem"
                    fontWeight="500"
                >{namePolicy === "NICK_NAME" ? "닉네임제" : "실명제"}</Text>
                <span className="clubInfo__line">|</span>
                <Text
                    color="#c2c2c2"
                    fontSize="0.8125rem"
                    fontWeight="500"
                >{moment(createdAt).format("YYYY년 M월 D일")} 생성</Text>
              </div>
              <div className='clubInfo__box'>
                <Text
                  color="#C2C2C2"
                  fontSize="0.9375rem"
                >모임소개</Text>
                <span className="clubInfo__box-content">
                  <Text
                    color={COLORS.white}
                    fontSize="0.8125rem"
                    fontWeight="500"
                  >{clubIntro}</Text>
                </span>
              </div>
            </div>
          </div>
          <div>
            <Button 
              type="button"
              onClick={handleJoinClub}
            >{JOIN_BTN.join}</Button>
          </div>
          </Wrapper>
        </div>
      )}
    </>
  )
}

export default InvitationClub;