import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import { InputBox } from "@/components/molecules/inputBox";
import { Wrapper } from "@/components/organisms/Wrapper";
import { useUserMutation } from "@/hook/user/useUserMutation";
import { COLORS } from "@/styles";
import { SIGNUP_BTN, SIGNUP_INPUT_ARR } from "../constants";
import { SignupHeader } from "./SignupHeader";

import { AuthBox } from "@/components/molecules/authBox";
import "./Signup.css";

interface FormData {
    userName: string;
    userEmail: string;
    userPhone: string;
};

const Signup = () => {
    const router = useRouter();
    const { data: userResponse, mutate } = useUserMutation();
    const [isAuth, setIsAuth] = useState(false);
    const methods = useForm<FormData>({
        mode: 'onChange',
        defaultValues: {
            userName: undefined,
            userPhone: undefined,
            userEmail: undefined
        }
    });

    const { handleSubmit, control, getValues, watch } = methods;

    const onSubmit = (data: any) => {
        if (!data.userName || !data.userPhone || !data.userEmail) {
            alert("필수 정보를 입력해주세요");
            return;
        }
        if (!isAuth) {
            alert("전화번호 인증을 진행해주세요");
        }
        console.log(data);
        mutate(data);
        console.log(userResponse);
        router.push("/user/signup/complete");
    };

    const watchedFields = watch();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Wrapper>
                <div>
                    <SignupHeader />
                        {SIGNUP_INPUT_ARR.map((box, index) => (
                            <React.Fragment key={index}>
                                <InputBox 
                                    title={box.title && box.title}
                                    type={box.type && box.type}
                                    essential={box.essential && box.essential}
                                    name={box.name && box.name}
                                    error={box.essential && watchedFields[box.name as keyof FormData] === ""}
                                    // register={register}
                                    control={control}
                                    getValues={getValues}
                                />
                                {box.essential && watchedFields[box.name as keyof FormData] === "" && (
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
                        <Controller
                            name="userPhone"
                            control={control}
                            render={({ field }) => 
                                <AuthBox 
                                    field={field} 
                                    getValues={getValues} 
                                    error={watchedFields["userPhone"] === ""}
                                    setIsAuth={setIsAuth}
                                />
                            }
                        />
                </div>
                <div>
                    <Button type="submit">{SIGNUP_BTN.complete}</Button>
                </div>
            </Wrapper>
        </form>
    )
}

export default Signup;