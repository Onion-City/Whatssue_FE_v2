"use client";

import { AbsenceMemberData } from "@/types/absence/types";
import React from "react";
import { AbsentBox } from "./AbsentBox";

export const AbsentList = ({ myList }: { myList: AbsenceMemberData[] }) => {
  // 공결 신청 내역 (MANAGER)
  // const { data } = useAbsenceMemberQuery({
  //     clubId : 1,
  //     page: 0,
  //     size: 10
  // });

  // console.log(data?.data.memberAbsences.content);
  // console.log(data?.data.doneAbsences.content);

  // 내 공결 신청 내역
  // const { data: myList } = useMyAbsenceQuery({
  //     clubId : 1,
  //     page: 0,
  //     size: 10
  // });

  console.log(myList);
  return (
    <>
      {myList?.map((item: AbsenceMemberData) => (
        <React.Fragment key={item.id}>
          <AbsentBox data={item} />
        </React.Fragment>
      ))}
    </>
  );
};
