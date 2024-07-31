"use client";
import { HistoryHeader } from "@/components/organisms/Header";
import { Nav } from "@/components/organisms/Nav";
import { useState } from "react";
import ManageAbsentCurrentList from "./components/ManageAbsentCurrentList";
import ManageAbsentHeader from "./components/ManageAbsentHeader";
import ManageAbsentHistoryList from "./components/ManageAbsentHistoryList";
import ManageAbsentWrapper from "./components/ManageAbsentWrapper";

export const ManageAbsent = () => {
    const [isChoice, setIsChoice] = useState(0); // 0 === 신청 현황, 1 === 신청 내역
    return(
        <>
            <HistoryHeader 
                title="공결 신청 관리"
            />
            <ManageAbsentWrapper>
                <ManageAbsentHeader 
                    isChoice={isChoice}
                    setIsChoice={setIsChoice}
                />
                {
                    isChoice ?
                    <ManageAbsentHistoryList /> :
                    <ManageAbsentCurrentList />
                }
            </ManageAbsentWrapper>
            <Nav />
        </>
    )
};