import { Button } from "@/components/atoms/button";
import { FileUpload } from "@/components/atoms/fileUpload";
import { Text } from "@/components/atoms/text";
import { InputBox } from "@/components/molecules/inputBox";
import { Wrapper } from "@/components/organisms/Wrapper";
import { ModifyPostFormData } from "@/hook/member/ProfileModifyForm";
import { useMemberModifyMutation } from "@/hook/member/useMemberModifyMutation";
import { useMyMemberQuery } from "@/hook/member/useMyMemberQuery";
import { MemberProfileUpdata, MemberProfileUpdataMid } from "@/types/member";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  MEMBERPROFILE_BTN,
  MEMBERPROFILE_INPUT_ARR,
  MEMBERPROFILE_TITLE,
} from "../constants/const";
import "./ProfileEdit.css";

const ProfileEdit = () => {
  const { data: myProfile } = useMyMemberQuery();
  const { control, reset, handleSubmit } = useForm<MemberProfileUpdataMid>({
    mode: "onChange",
  });
  useEffect(() => {
    const memberData = myProfile?.data;
    if (memberData == undefined) {
      return;
    }
    reset({
      memberName: memberData.memberName,
      memberIntro: memberData.memberIntro,
      userPhone: memberData.userPhone,
      userEmail: memberData.userEmail,
      profileImage: memberData.profileImage,
      isEmailPublic: memberData.isEmailPublic,
      isPhonePublic: memberData.isPhonePublic,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myProfile]);
  const createClubMutation = useMemberModifyMutation();
  const submitSignup = (data: MemberProfileUpdata) => {
    const changeProfile = myProfile?.data.profileImage !== data.profileImage;
    const ModifyData = ModifyPostFormData(data, changeProfile);
    console.log("dddddddddd", ModifyData);
    console.log(
      "12332123",
      myProfile?.data.profileImage,
      "ㅇㅇㄴㅁㅇㄴㅁㅇ",
      data.profileImage
    );
    createClubMutation.mutate(ModifyData);
  };
  return (
    <Wrapper isHeader={true}>
      <form onSubmit={handleSubmit(submitSignup)}>
        <div className="member__profile__edit__wrapper">
          <div className="member__profile__edit__content__img">
            <Text color="#fff" fontSize="1.0625rem" fontWeight="700">
              {MEMBERPROFILE_TITLE}
            </Text>
            <FileUpload
              field={{
                name: "profileImage",
                onChange: () => {}, // 필요한 경우 구현
                onBlur: () => {}, // 필요한 경우 구현
                value: { url: myProfile?.data?.profileImage },
                ref: () => {},
              }}
              name="profileImage"
            />
          </div>
          {MEMBERPROFILE_INPUT_ARR.map((box, index) => (
            <React.Fragment key={index}>
              <InputBox
                title={box.title && box.title}
                maxCnt={box.maxCnt && box.maxCnt}
                type={box.type && box.type}
                essential={box.essential && box.essential}
                name={box.name && box.name}
                control={control}
                addName={box.addName && box.addName}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="member__profile__edit__btn">
          <Button>{MEMBERPROFILE_BTN}</Button>
        </div>
      </form>
    </Wrapper>
  );
};
export default ProfileEdit;
