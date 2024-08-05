"use client";
import { HistoryHeader } from "@/components/organisms/Header";
import { Nav } from "@/components/organisms/Nav";
import { useClubJoinQuery } from "@/hook/info/useClubJoinQuery";
import ManageJoinHeader from "./components/ManageJoinHeader";
import ManageJoinList from "./components/ManageJoinList";
import ManageJoinWrapper from "./components/ManageJoinWrapper";

import { useState } from "react";
import "./components/ManageJoin.css";
export const ManageJoin = () => {
    const { data: joinList } = useClubJoinQuery();
    console.log(joinList);

    const [selectJoins, setSelectJoins] = useState<number[]>([]);

    return(
        <>
            <HistoryHeader 
                title="모임 가입 신청 관리"
            />
            <ManageJoinWrapper>
                {
                    joinList &&
                    joinList.data &&
                    <>
                        <ManageJoinHeader 
                            memberCnt={joinList.data.length}
                            selectJoins={selectJoins}
                        />
                        <ManageJoinList 
                            joinList={joinList.data}
                            selectJoins={selectJoins}
                            setSelectJoins={setSelectJoins}
                        />
                    </>
                }
            </ManageJoinWrapper>
            <Nav />
        </>
    )
};