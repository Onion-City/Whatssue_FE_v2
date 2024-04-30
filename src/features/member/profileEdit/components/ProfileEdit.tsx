import { Button } from "@/components/atoms/button";
import { FileUpload } from "@/components/atoms/fileUpload";
import { Text } from "@/components/atoms/text";
import { ProfileEditInputBox } from "@/components/molecules/profileEditInputBox";
import { Wrapper } from "@/components/organisms/Wrapper";
import React from "react";
import {
  MEMBERPROFILE_BTN,
  MEMBERPROFILE_INPUT_ARR,
  MEMBERPROFILE_TITLE,
} from "../constants/const";
import "./ProfileEdit.css";
const ProfileEdit = () => {
  return (
    <Wrapper isHeader={true}>
      <div className="member__profile__edit__wrapper">
        <div className="member__profile__edit__content__img">
          <Text color="#fff" fontSize="1.0625rem" fontWeight="700">
            {MEMBERPROFILE_TITLE}
          </Text>
          <FileUpload />
        </div>
        {MEMBERPROFILE_INPUT_ARR.map((box, index) => (
          <React.Fragment key={index}>
            <ProfileEditInputBox
              title={box.title && box.title}
              maxCnt={box.maxCnt && box.maxCnt}
              type={box.type && box.type}
              essential={box.essential && box.essential}
              name={box.name && box.name}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="member__profile__edit__btn">
        <Button>{MEMBERPROFILE_BTN}</Button>
      </div>
    </Wrapper>
  );
};
export default ProfileEdit;
