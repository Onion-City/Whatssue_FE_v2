"use client";

import { HistoryHeader } from "@/components/organisms/Header";
import { Nav } from "@/components/organisms/Nav";
import { useClubsInfoQuery } from "@/hook/club/useClubsInfoQuery";
import { ClubInfo } from "./components/ClubInfo";
import { ClubProfile } from "./components/ClubProfile";

import "./components/ClubInfo.css";
export const MemberClubInfo = () => {
    const params = {
        clubId : 1
    }
    const { data: infoData, isLoading, isError } = useClubsInfoQuery(params);

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

    return(
        <>
            {!profiles && !infos ? (
                <div>Loading...</div>
            ): (
                <div className="memberClubInfo">
                    <HistoryHeader />
                    <ClubProfile 
                        profiles={profiles}
                    />
                    <ClubInfo 
                        infos={infos}
                    />
                    <Nav />
                </div>
            )}
        </>
    )
}