"use client";

import { NAME } from "@/constants/const";
import { useGetUserInfoQuery } from "@/hook/user/useGetUserInfoQuery";
import { useRouter } from "next/navigation";
import { ACCOUNT_INFO } from "../constants/const";
import "./AccountInfo.css";

const AccountInfo = () => {
  const router = useRouter();
  const { data } = useGetUserInfoQuery();
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
