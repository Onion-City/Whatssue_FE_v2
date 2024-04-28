"use client";

import { Wrapper } from "@/components/organisms/Wrapper";
import {
  EDIT_ACCOUNT_INFO_BTN,
  EDIT_ACCOUNT_INFO_INPUT_ARR,
} from "../constants/const";
import React from "react";
import { InputBox } from "@/components/molecules/inputBox";
import { Button } from "@/components/atoms/button";
import { useRouter } from "next/navigation";

const EditProfile = () => {
  const router = useRouter();
  const userName = "김준영";
  const userEmail = "whatshu@gamil.com";
  const userPhone = "010-1234-5678";

  return (
    <Wrapper>
      <div style={{ marginTop: "3.5rem" }}>
        {EDIT_ACCOUNT_INFO_INPUT_ARR.map((box, index) => (
          <React.Fragment key={index}>
            <InputBox
              title={box.title && box.title}
              type={box.type && box.type}
              essential={box.essential && box.essential}
              name={box.name && box.name}
            />
          </React.Fragment>
        ))}
      </div>
      <Button onClick={() => router.push("/user/profile")}>
        {EDIT_ACCOUNT_INFO_BTN.complete}
      </Button>
    </Wrapper>
  );
};

export default EditProfile;
