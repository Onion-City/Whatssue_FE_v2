import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import { InputBox } from "@/components/molecules/inputBox";
import { Wrapper } from "@/components/organisms/Wrapper";
import { useUserMutation } from "@/hook/user/useUserMutation";
import { COLORS } from "@/styles";
import { SIGNUP_BTN, SIGNUP_INPUT_ARR } from "../constants";
import { SignupHeader } from "./SignupHeader";

import "./Signup.css";

interface FormData {
    userName: string;
    userEmail: string;
    userPhone: string;
};

const Signup = () => {
    const router = useRouter();
    const { data: userResponse, mutate } = useUserMutation();
    const methods = useForm<FormData>({
        mode: 'onChange',
        defaultValues: {
            userName: "",
            userPhone: "",
            userEmail: ""
        }
    });

    const { handleSubmit, control, getValues, watch } = methods;

    const onSubmit = (data: any) => {
        if (!data.userName || !data.userPhone || !data.userEmail) {
            alert("필수 정보를 입력해주세요");
            return;
        }
        console.log(data);
        mutate(data);
        console.log(userResponse);
        router.push("/user/signup/complete");
    };

    const watchedFields = watch();

    return (
        <Wrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <SignupHeader />
                        {SIGNUP_INPUT_ARR.map((box, index) => (
                            <React.Fragment key={index}>
                                <InputBox 
                                    title={box.title && box.title}
                                    type={box.type && box.type}
                                    essential={box.essential && box.essential}
                                    name={box.name && box.name}
                                    error={box.essential && !watchedFields[box.name as keyof FormData]}
                                    // register={register}
                                    control={control}
                                    getValues={getValues}
                                />
                                {box.essential && !watchedFields[box.name as keyof FormData] && (
                                    <span
                                        className="error-msg"
                                    >
                                        <Text
                                            color={COLORS.red}
                                            fontWeight="500"
                                        >필수 정보입니다.</Text>
                                    </span>
                                )}
                            </React.Fragment>
                        ))}
                </div>
                <div>
                    <Button type="submit">{SIGNUP_BTN.complete}</Button>
                </div>
            </form>
        </Wrapper>
    )
}

export default Signup;