import { Button } from "@/components/atoms/button";
import { FileUpload } from "@/components/atoms/fileUpload";
import { Text } from "@/components/atoms/text";
import { InputBox } from "@/components/molecules/inputBox";
import { Wrapper } from "@/components/organisms/Wrapper";
import { useMemberProfileMutation } from "@/hook/member/useMemberProfileMutation";
import { COLORS } from "@/styles";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ONBOARDING_BTN, ONBOARDING_INPUT_ARR } from "../constants/const";

interface FormData {
    memberName: string;
    memberIntro: string;
    profileImage: string | File;
    isEmailPublic: boolean;
    isPhonePublic: boolean;
}

const RealnameOnboarding = () => {
    const { control, handleSubmit, setValue } =
    useForm<FormData>({
      mode: "onChange",
      defaultValues: {
        memberName: '',
        memberIntro: '',
        profileImage: '',
        isEmailPublic: false,
        isPhonePublic: false,
      }
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

    const { mutate } = useMemberProfileMutation()
    const submitOnboarding = (data: FormData) => {
        console.log(data);
        // mutate(data);
    }
    return (
        <form onSubmit={handleSubmit(submitOnboarding)}>
            <Wrapper isHeader={true}>
                <div className="register__content">
                    <div className="register__content__img">
                        <Text
                            color={COLORS.white}
                            fontSize="1.0625rem"
                            fontWeight="700"
                        >프로필 사진</Text>
                        <FileUpload />
                    </div>
                    {ONBOARDING_INPUT_ARR.realname.map((box, index) => (
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
                    <Button
                        type="submit"
                    >{ONBOARDING_BTN}</Button>
                </div>
            </Wrapper>
        </form>
    )
}

export default RealnameOnboarding;