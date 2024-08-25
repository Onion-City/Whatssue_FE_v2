"use client";

import { useAbsencesDoneQuery } from "@/hook/absence/useAbsencesDoneQuery";
import { FormatClubId } from "@/utils/extractPathElements";
import { useState } from "react";

import "./ManageAbsent.css";
import { ManageAbsentHistoryItem } from "./ManageAbsentHistoryItem";

export default function ManageAbsentHistoryList() {
  const [page, setPage] = useState(0);
  const [params, setParams] = useState({
    clubId: FormatClubId(),
    startDate: "2000-01-01",
    endDate: "2030-01-01",
    page: page,
    size: 10,
  });
  const { data: doneList } = useAbsencesDoneQuery(params);
  console.log(doneList?.data);

  return (
    <div className="historyList">
      {doneList?.data?.content?.map((item) => (
        <span key={item.id}>
          <ManageAbsentHistoryItem data={item} />
        </span>
      ))}
    </div>
  );
}
