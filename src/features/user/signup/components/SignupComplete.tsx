"use client";

import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import { Wrapper } from "@/components/organisms/Wrapper";
import { useRouter } from "next/navigation";
import { SIGNUP_COMPLETE_BTN, SIGNUP_COMPLETE_TXT } from "../constants";
import "./Signup.css";

const SignupComplete = () => {
    const router = useRouter();
    return(
        <Wrapper>
            <div className="signup__content">
                    {
                        SIGNUP_COMPLETE_TXT.map((text, index) => (
                            <div key={index} className="signup__text">
                                <Text
                                    color="#fff"
                                    fontSize="1.0625rem"
                                    fontWeight="700"
                                >{text}</Text>
                            </div>
                        ))
                    }
            </div>
            <div className="register3_rowBtn">
                <Button size="lg" onClick={() => router.push("/")}>{SIGNUP_COMPLETE_BTN}</Button>
            </div>
        </Wrapper>
    )
};

export default SignupComplete;