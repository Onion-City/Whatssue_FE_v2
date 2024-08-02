"use client";
import { ClubBox } from "@/components/molecules/clubBox";
import { BottomSheet } from "@/components/organisms/BottomSheet/BottomSheet";
import { RouterBtn } from "@/components/organisms/RouterBtn/RouterBtn";
import { ICONS } from "@/constants/images";
import { useClubListQuery } from "@/hook/user/useClubListQuery";
import Image from "next/image";
import React, { useState } from "react";
import { Text } from "../text";
import "./HeaderClubInfo.css";
interface HeaderClubInfoProps {
  clubName: string;
  clubImg: string;
  isCenter?: boolean;
}
export function HeaderClubInfo({
  clubName,
  clubImg,
  isCenter = false,
}: HeaderClubInfoProps) {
  const [openFloating, setOpenFloating] = useState<boolean>(false);
  const clubList = useClubListQuery({ page: 0, size: 10 }).data?.data.content;

  return (
    <>
      <div
        className="club__change__wrapper"
        onClick={() => setOpenFloating((prev) => !prev)}
        style={{ marginLeft: isCenter ? "auto" : undefined }}
      >
        <Image
          src={clubImg}
          alt="down"
          className="club__change__img"
          width={100}
          height={100}
        />
        <Text color="#fff" fontSize="1.0625rem" fontWeight="700">
          {clubName}
        </Text>
        <Image
          src={ICONS.down}
          alt="down"
          className={`club__change__arrow ${openFloating ? "active" : ""}`}
        />
      </div>
      {openFloating && (
        <BottomSheet setOpenFloating={setOpenFloating}>
          {clubList?.map((club) => (
            <React.Fragment key={club.clubId}>
              <RouterBtn
                path={`${club.clubId}`}
                onClick={() => setOpenFloating(false)}
              >
                <ClubBox clubImg={club.clubProfileImage}>
                  {club.clubName}
                </ClubBox>
              </RouterBtn>
            </React.Fragment>
          ))}
        </BottomSheet>
      )}
    </>
  );
}
