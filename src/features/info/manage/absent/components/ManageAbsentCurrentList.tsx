"use client";

import { useRequestAbsenceQuery } from "@/hook/absence/useAbsencesRequestQuery";
import { FormatClubId } from "@/utils/extractPathElements";
import { useState } from "react";

import "./ManageAbsent.css";
import { ManageAbsentCurrentItem } from "./ManageAbsentCurrentItem";

export default function ManageAbsentCurrentList() {
  const [page, setPage] = useState(0);
  const [params, setParams] = useState({
    clubId: FormatClubId(),
    startDate: "2000-01-01",
    endDate: "2030-01-01",
    page: page,
    size: 10
  })
  const { data: requestList } = useRequestAbsenceQuery(params);
  console.log(requestList?.data?.content);

  return (
    <div className="currentList">
      {
        requestList?.data?.content
        ?.map(item => 
          <span 
            key={item.id}
          >
            <ManageAbsentCurrentItem 
              data={item}
            />
          </span>
        )
      }
    </div>
  )
}
