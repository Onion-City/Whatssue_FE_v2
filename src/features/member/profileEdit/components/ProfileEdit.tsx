import AddPic from "@/assets/images/AddPic.png";
import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import { InputBox } from "@/components/molecules/inputBox";
import { Wrapper } from "@/components/organisms/Wrapper";
import { ModifyPostFormData } from "@/hook/member/ProfileModifyForm";
import { useMemberModifyMutation } from "@/hook/member/useMemberModifyMutation";
import { useMyMemberQuery } from "@/hook/member/useMyMemberQuery";
import { MemberProfileUpdata, MemberProfileUpdataMid } from "@/types/member";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  MEMBERPROFILE_BTN,
  MEMBERPROFILE_INPUT_ARR,
  MEMBERPROFILE_TITLE,
} from "../constants/const";
import "./ProfileEdit.css";

const ProfileEdit = () => {
  const { data: myProfile } = useMyMemberQuery();
  const { control, reset, handleSubmit, setValue } =
    useForm<MemberProfileUpdataMid>({
      mode: "onChange",
    });
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const selectedFile = files[0];
    const newImageUrl = URL.createObjectURL(selectedFile);
    setImageUrl(newImageUrl);
    setValue("profileImage", selectedFile);
  };
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
    setImageUrl(memberData.profileImage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myProfile]);

  const createClubMutation = useMemberModifyMutation();
  const submitSignup = (data: MemberProfileUpdata) => {
    const changeProfile = myProfile?.data.profileImage !== data.profileImage;
    const ModifyData = ModifyPostFormData(data, changeProfile);
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
            <>
              <label htmlFor="first-upload-input">
                <div className="fileUpload__box">
                  <Image
                    src={imageUrl || AddPic}
                    alt="pic"
                    className="fileUpload__box__img"
                    placeholder="blur"
                    blurDataURL="@/assets/images/AddPic.png"
                    width={115}
                    height={115}
                  />
                </div>
              </label>
              <input
                id="first-upload-input"
                type="file"
                accept="image/*"
                name="profileImage"
                onChange={handleChangeImage}
              />
            </>
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
