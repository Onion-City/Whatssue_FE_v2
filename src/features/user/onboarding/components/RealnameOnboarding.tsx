import { Button } from "@/components/atoms/button";
import { FileUpload } from "@/components/atoms/fileUpload";
import { Text } from "@/components/atoms/text";
import { InputBox } from "@/components/molecules/inputBox";
import { Wrapper } from "@/components/organisms/Wrapper";
import React from "react";
import { useForm } from "react-hook-form";
import { ONBOARDING_BTN, ONBOARDING_INPUT_ARR } from "../constants/const";

interface FormData {
    nickname: string;
    introduce: string;
    emailPublic: boolean;
    mobilePublic: boolean;
}

const RealnameOnboarding = () => {
    const methods = useForm<FormData>({
        mode: 'onChange'
    });

    const { handleSubmit, control } = methods;

    const submitOnboarding = (data: FormData) => {
        console.log(data);
    }
    return (
        <Wrapper isHeader={true}>
            <form onSubmit={handleSubmit(submitOnboarding)}>
                <div className="register__content">
                    <div className="register__content__img">
                        <Text
                            color="#fff"
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
                    <Button>{ONBOARDING_BTN}</Button>
                </div>
            </form>
        </Wrapper>
    )
}

export default RealnameOnboarding;