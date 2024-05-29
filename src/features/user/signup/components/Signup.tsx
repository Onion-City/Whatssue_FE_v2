import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/atoms/button";
import { InputBox } from "@/components/molecules/inputBox";
import { Wrapper } from "@/components/organisms/Wrapper";
import { useCreateUser } from "@/hook/user/useCreateUser";
import { SIGNUP_BTN, SIGNUP_INPUT_ARR } from "../constants";
import { SignupHeader } from "./SignupHeader";
// import "./NicknameOnboarding.css";

interface FormData {
    useName: string;
    userEmail: string;
    userPhone: string;
};

const Signup = () => {
    const router = useRouter();
    const { data: userResponse, mutate } = useCreateUser();
    const methods = useForm<FormData>({
        mode: 'onChange'
    });

    const { handleSubmit, control } = methods;

    const onSubmit = (data: any) => {
        console.log(data);
        mutate(data);
        console.log(userResponse);
        // router.push("/user/signup/complete");
    }
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
                                    // register={register}
                                    control={control}
                                />
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