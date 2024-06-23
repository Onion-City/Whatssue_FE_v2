"use client";

import { Button } from "@/components/atoms/button";
import { InputBox } from "@/components/molecules/inputBox";
import { Wrapper } from "@/components/organisms/Wrapper";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  EDIT_ACCOUNT_INFO_BTN,
  EDIT_ACCOUNT_INFO_INPUT_ARR,
} from "../constants/const";
import { signUpInfo } from "@/types/user/types";
import { useGetUserInfoQuery } from "@/hook/user/useGetUserInfoQuery";
import { useModificationUserInfoMutation } from "@/hook/user/useModificationUserInfoMutation";
import { useQueryClient } from "@tanstack/react-query";

const EditProfile: React.FC = () => {
  const router = useRouter();
  const methods = useForm<signUpInfo>({
    mode: "onChange",
  });
  const { handleSubmit, control, setValue } = methods;
  const { data: userInfo } = useGetUserInfoQuery();
  const mutation = useModificationUserInfoMutation();
  const queryClient = useQueryClient();
  const submitOnboarding: SubmitHandler<signUpInfo> = (data) => {
    mutation.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["userInfo"] });
        router.push("/user/profile");
      },
      onError: (error) => {
        console.error("Error updating user info:", error);
      },
    });
  };

  useEffect(() => {
    if (userInfo) {
      setValue("userName", userInfo.data.userName);
      setValue("userPhone", userInfo.data.userPhone);
      setValue("userEmail", userInfo.data.userEmail);
    }
  });

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
        <Button type="submit">{EDIT_ACCOUNT_INFO_BTN.complete}</Button>
      </form>
    </Wrapper>
  );
};

export default EditProfile;
