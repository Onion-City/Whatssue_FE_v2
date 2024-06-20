"use client";

import { Button } from "@/components/atoms/button";
import { InputBox } from "@/components/molecules/inputBox";
import { Wrapper } from "@/components/organisms/Wrapper";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  EDIT_ACCOUNT_INFO_BTN,
  EDIT_ACCOUNT_INFO_INPUT_ARR,
} from "../constants/const";

interface FormData {
  userName: string;
  userEmail: string;
  userMobile: string;
}

const EditProfile: React.FC = () => {
  const router = useRouter();
  const methods = useForm<FormData>({
    mode: "onChange",
  });

  const { handleSubmit, control } = methods;

  const submitOnboarding: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(submitOnboarding)}>
        <div style={{ marginTop: "3.5rem" }}>
          {EDIT_ACCOUNT_INFO_INPUT_ARR.map((box, index) => (
            <React.Fragment key={index}>
              <InputBox
                title={box.title}
                type={box.type}
                essential={box.essential}
                name={box.name}
                control={control}
              />
            </React.Fragment>
          ))}
        </div>
        <Button onClick={() => router.push("/user/profile")} type="submit">
          {EDIT_ACCOUNT_INFO_BTN.complete}
        </Button>
      </form>
    </Wrapper>
  );
};

export default EditProfile;
