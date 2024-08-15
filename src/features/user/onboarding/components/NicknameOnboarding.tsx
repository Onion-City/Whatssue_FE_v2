import AddPic from "@/assets/images/AddPic.png";
import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import { InputBox } from "@/components/molecules/inputBox";
import { Wrapper } from "@/components/organisms/Wrapper";
import { MEMBERPROFILE_TITLE } from "@/features/member/profileEdit/constants/const";
import { useMemberProfileMutation } from "@/hook/member/useMemberProfileMutation";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ONBOARDING_BTN, ONBOARDING_INPUT_ARR } from "../constants/const";

import "./NicknameOnboarding.css";

interface FormData {
  memberName: string;
  memberIntro: string;
  profileImage: string | File;
  isEmailPublic: boolean;
  isPhonePublic: boolean;
}

const NicknameOnboarding = () => {
  const { control, handleSubmit, setValue } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      memberName: "",
      memberIntro: "",
      profileImage: "",
      isEmailPublic: false,
      isPhonePublic: false,
    },
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

  const postFormData = (propData: FormData) => {
    const resData = new FormData();
    resData.append("memberName", propData.memberName);
    resData.append("memberIntro", propData.memberIntro);
    resData.append("isEmailPublic", String(propData.isEmailPublic));
    resData.append("isPhonePublic", String(propData.isPhonePublic));
    resData.append("profileImage", propData.profileImage);

    return resData;
  };

  const { mutate } = useMemberProfileMutation();
  const submitOnboarding = (data: FormData) => {
    console.log(data);
    const PostData = postFormData(data);
    console.log(PostData);
    mutate(PostData);
  };
  return (
    <form onSubmit={handleSubmit(submitOnboarding)}>
      <Wrapper isHeader={true}>
        <div className="register__content">
          <div className="register__content__img">
            <Text color="#fff" fontSize="1.0625rem" fontWeight="700">
              {MEMBERPROFILE_TITLE}
            </Text>
            <>
              <label htmlFor="first-upload-input">
                <div className="fileUpload__box">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt="pic"
                      className="fileUpload__box__img default"
                      placeholder="blur"
                      blurDataURL="@/assets/images/AddPic.png"
                      width={115}
                      height={115}
                    />
                  ) : (
                    <Image
                      src={AddPic}
                      alt="pic"
                      className="fileUpload__box__img"
                      placeholder="blur"
                      blurDataURL="@/assets/images/AddPic.png"
                      width={115}
                      height={115}
                    />
                  )}
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
          {ONBOARDING_INPUT_ARR.nickname.map((box, index) => (
            <React.Fragment key={index}>
              <InputBox
                title={box.title && box.title}
                maxCnt={box.maxCnt && box.maxCnt}
                type={box.type && box.type}
                subtitle={box.subtitle && box.subtitle}
                essential={box.essential && box.essential}
                name={box.name && box.name}
                control={control}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="register__btn">
          <Button type="submit">{ONBOARDING_BTN}</Button>
        </div>
      </Wrapper>
    </form>
  );
};

export default NicknameOnboarding;
