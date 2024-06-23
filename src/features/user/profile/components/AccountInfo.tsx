"use client";

import "./AccountInfo.css";
import { ACCOUNT_INFO } from "../constants/const";
import { NAME } from "@/constants/const";
import { useRouter } from "next/navigation";
import React from "react";
import { useGetInfoQuery } from "@/hook/user/useGetInfoQuery";

const AccountInfo: React.FC = () => {
  const router = useRouter();
  const { data } = useGetInfoQuery();
  const userInfo = data?.data;

  return (
    <div className="account_info">
      <div className="account_info__head">
        <span className="account_info__title">{ACCOUNT_INFO.title}</span>
        <span
          className="account_info__edit"
          onClick={() => router.push("/user/profile/edit")}
        >
          {ACCOUNT_INFO.edit}
        </span>
      </div>

      <div className="account_info__body">
        <div className="account_info__sub_title">
          <p>{NAME}</p>
          <p>{ACCOUNT_INFO.email}</p>
          <p>{ACCOUNT_INFO.phoneNum}</p>
        </div>
        <div className="account_info__content">
          <p>{userInfo?.userName}</p>
          <p>{userInfo?.userEmail}</p>
          <p>{userInfo?.userPhone}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
