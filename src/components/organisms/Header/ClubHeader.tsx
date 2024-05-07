"use client";
import Alarm from "@/assets/images/ic_alarm.png";
import { Text } from "@/components/atoms/text";
import { ClubBox } from "@/components/molecules/clubBox";
import { BottomSheet } from "@/components/organisms/BottomSheet/BottomSheet";
import { ICONS, IMAGES } from "@/constants/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { RouterBtn } from "../RouterBtn/RouterBtn";
import "./Header.css";

export function ClubHeader() {
  const router = useRouter();
  const [openFloating, setOpenFloating] = useState<boolean>(false);
  const handleAlarmModalOpen = () => {
    //알람 컴포넌트 연결
  };

  const clubList = [
    {
        clubId: 1,
        clubName: "배드민턴 모임",
        clubImg: IMAGES.profile
    },
    {
        clubId: 2,
        clubName: "떵개 식사 모임",
        clubImg: IMAGES.profile
    }
  ];

  return (
    <header id="header">
      <div className="clubHeader">
        <div>
            <Image
                src={IMAGES.back}
                alt="back"
                placeholder="blur"
                onClick={() => router.back()}
            />
        </div>
        <div className="clubHeader__title" onClick={() => setOpenFloating((prev) => !prev)}>
            <Text color="#fff" fontSize="1.0625rem">배드민턴 모임</Text>
            <Image 
                src={ICONS.down}
                alt="down"
                className={openFloating ? "clubHeader__title__img active" : "clubHeader__title__img"}
            />
        </div>
        <div>
          <Image
            src={Alarm}
            alt="Alarm"
            placeholder="blur"
            onClick={handleAlarmModalOpen}
          />
        </div>

        {
          openFloating && (
            <BottomSheet 
              // openFloating={openFloating}
              setOpenFloating={setOpenFloating}
            >
              {clubList?.map((club) => (
                    <React.Fragment key={club.clubId}>
                        <RouterBtn
                            path={`${club.clubId}`}
                            onClick={() => setOpenFloating(false)}
                        >
                            <ClubBox
                                clubImg={club.clubImg}
                            >{club.clubName}</ClubBox>
                        </RouterBtn>
                    </React.Fragment>
                ))}
            </BottomSheet>
          )
        }
      </div>
    </header>
  );
}
