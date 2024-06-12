import { ACCOUNT_SETTING } from "../constants/const";
import "./AccountSetting.css";
import React from "react";

const AccountSetting: React.FC = () => {
  return (
    <div className="account_setting">
      <div className="account_setting__logout">{ACCOUNT_SETTING.logout}</div>
      <div className="account_setting__withdrawal">
        {ACCOUNT_SETTING.withdrawal}
      </div>
      <div className="account_setting__whatssue_ver">
        {ACCOUNT_SETTING.whatssueVer}
      </div>
    </div>
  );
};

export default AccountSetting;
