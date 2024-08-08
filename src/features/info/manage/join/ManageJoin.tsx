"use client";
import { HistoryHeader } from "@/components/organisms/Header";
import { Nav } from "@/components/organisms/Nav";
import { useClubJoinQuery } from "@/hook/info/useClubJoinQuery";
import ManageJoinHeader from "./components/ManageJoinHeader";
import ManageJoinList from "./components/ManageJoinList";
import ManageJoinWrapper from "./components/ManageJoinWrapper";

import { ClubJoin } from "@/types/info";
import { useState } from "react";
import "./components/ManageJoin.css";

const ManageJoinContent = ({ 
    joinList
}: {
    joinList: ClubJoin[]
}) => {
  const [selectJoins, setSelectJoins] = useState<number[]>([]);

  return (
    <>
      <ManageJoinHeader 
        memberCnt={joinList.length}
        selectJoins={selectJoins}
      />
      <ManageJoinList 
        joinList={joinList}
        selectJoins={selectJoins}
        setSelectJoins={setSelectJoins}
      />
    </>
  );
};

export const ManageJoin = () => {
  const { data: joinList } = useClubJoinQuery();
  console.log(joinList);

  return (
    <>
      <HistoryHeader title="모임 가입 신청 관리" />
      <ManageJoinWrapper>
        {joinList && joinList.data && (
          <ManageJoinContent joinList={joinList.data} />
        )}
      </ManageJoinWrapper>
      <Nav />
    </>
  );
};