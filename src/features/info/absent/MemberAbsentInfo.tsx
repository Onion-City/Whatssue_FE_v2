"use client";
import { HistoryHeader } from "@/components/organisms/Header";
import { Nav } from "@/components/organisms/Nav";
import useMyAbsence from "@/hook/absence/useMyAbsence";
import { FormatClubId } from "@/utils/extractPathElements";
import { AbsentHeader } from "./components/AbsentHeader";
import { AbsentList } from "./components/AbsentList";

import "./components/MemberAbsent.css";

export const MemberAbsentInfo = () => {
  const clubId = FormatClubId();
  // 내 공결 신청 내역
  const { refetchPeriodSchedule, myList } = useMyAbsence({
    clubId: clubId,
    startDate: "2020-01-01",
    endDate: "2030-01-01",
    page: 0,
    size: 10,
  });

  return (
    <>
      <HistoryHeader title="공결 신청 내역" />
      <div className="memberAbsentInfo">
        <AbsentHeader refetchPeriodSchedule={refetchPeriodSchedule} />
        {myList && myList.data && myList.data.content ? (
          <AbsentList myList={myList.data.content} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <Nav />
    </>
  );
};
