"use client";

import { Button } from "@/components/atoms/button";
import { FileUpload } from "@/components/atoms/fileUpload";
import { Text } from "@/components/atoms/text";
import { InputBox } from "@/components/molecules/inputBox";
import { Wrapper } from "@/components/organisms/Wrapper";
import { useClubsInfoQuery } from "@/hook/club/useClubsInfoQuery";
import { COLORS } from "@/styles";
import { FormatClubId } from "@/utils/extractPathElements";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { CLUBINFO_MODIFY_INPUT_ARR } from "../constants";

import "../components/ClubInfoModify.css";

interface ImageType {
  url: string;
  imageFile: File;
};

interface FormData {
  clubName?: string;
  clubIntro?: string;
  contactMeans?: string;
  link?: string;
  clubProfileImage?: string | ImageType;
}

const ClubInfoModifyForm = () => {
    const clubId = FormatClubId();
    const params = {
      clubId : clubId
    }

    const { data: infoData } = useClubsInfoQuery(params);
    console.log(infoData?.data);

    const defaultValues = infoData?.data;

    const methods = useForm<FormData>({
      mode: 'onChange',
      defaultValues: {
        clubName: defaultValues?.clubName || '',
        clubIntro: defaultValues?.clubIntro || '',
        contactMeans: defaultValues?.contactMeans || '',
        link: defaultValues?.link || '',
        clubProfileImage: defaultValues?.clubProfileImage || ''
      }
    });

    const { handleSubmit, control, reset } = methods;

    useEffect(() => {
      if (defaultValues) {
        reset({
          clubName: defaultValues.clubName,
          clubIntro: defaultValues.clubIntro,
          contactMeans: defaultValues.contactMeans,
          link: defaultValues.link,
          clubProfileImage: defaultValues?.clubProfileImage
        });
      }
    }, [defaultValues, reset]);

    const submitModifyInfo = (data: FormData) => {
      console.log(data);
    }

    return (
      <>
        <form onSubmit={handleSubmit(submitModifyInfo)}>
            <Wrapper isHeader={true}>
                <div className="register__content">
                    <div className="register__content__img">
                        <Text
                            color={COLORS.white}
                            fontSize="1.0625rem"
                            fontWeight="700"
                        >모임 사진</Text>
                        <Controller
                          name="clubProfileImage"
                          control={control}
                          render={({ field }) => (
                            <FileUpload field={field} />
                          )}
                        />
                    </div>
                    {CLUBINFO_MODIFY_INPUT_ARR.map((box, index) => (
                        <React.Fragment key={index}>
                            <InputBox 
                                title={box.title && box.title}
                                maxCnt={box.maxCnt && box.maxCnt}
                                type={box.type && box.type}
                                essential={box.essential && box.essential}
                                name={box.name && box.name}
                                control={control}
                            />
                        </React.Fragment>
                    ))}
                </div>
                <div className="register__btn">
                    <Button
                        type="submit"
                    >수정 완료</Button>
                </div>
            </Wrapper>
        </form>
      </>
    )
}

export default ClubInfoModifyForm;