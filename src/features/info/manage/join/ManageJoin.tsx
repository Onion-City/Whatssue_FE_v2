"use client";
import { HistoryHeader } from "@/components/organisms/Header";
import { Nav } from "@/components/organisms/Nav";
import ManageJoinHeader from "./components/ManageJoinHeader";

import "./components/ManageJoin.css";
import ManageJoinList from "./components/ManageJoinList";
import ManageJoinWrapper from "./components/ManageJoinWrapper";

export const ManageJoin = () => {
    return(
        <>
            <HistoryHeader 
                title="모임 가입 신청 관리"
            />
            <ManageJoinWrapper>
                <ManageJoinHeader 
                    memberCnt={15}
                />
                <ManageJoinList />
            </ManageJoinWrapper>
            <Nav />
        </>
    )
};