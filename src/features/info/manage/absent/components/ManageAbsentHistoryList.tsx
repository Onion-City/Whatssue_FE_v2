"use client";

import { useAbsencesDoneQuery } from "@/hook/absence/useAbsencesDoneQuery";
import { AbsenceMemberData } from "@/types/absence/types";
import { FormatClubId } from "@/utils/extractPathElements";
import { useState } from "react";

import "./manageAbsent.css";
import { ManageAbsentHistoryItem } from "./ManageAbsentHistoryItem";

export default function ManageAbsentHistoryList() {
  const absentDummy: AbsenceMemberData = 
  {
    id: 0,
    clubMemberId: 123,
    scheduleId: 456,
    scheduleDate: "2024-01-01",
    scheduleName: "와이어 프레임 작성 회의",
    officialAbsenceContent: "test공결사유",
    officialAbsenceRequestType: "WAITING",
    createAt: "2024-01-01",
    updateAt: "2024-01-01"
  }
  
  const [page, setPage] = useState(0);
  const [params, setParams] = useState({
    clubId: FormatClubId(),
    startDate: "2000-01-01",
    endDate: "2030-01-01",
    page: page,
    size: 10
  })
  const { data: doneList } = useAbsencesDoneQuery(params);
  console.log(doneList?.data);
  
  return (
    <div className="historyList">
      {
        doneList?.data?.content
        ?.map(item => 
          <span 
            key={item.id}
          >
            <ManageAbsentHistoryItem
              data={item}
            />
          </span>
        )
      }
    </div>
  )
}
