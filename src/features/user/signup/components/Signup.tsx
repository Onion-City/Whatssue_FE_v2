import { Button } from "@/components/atoms/button";
import { InputBox } from "@/components/molecules/inputBox";
import { Wrapper } from "@/components/organisms/Wrapper";
import React from "react";
import { SIGNUP_BTN, SIGNUP_INPUT_ARR } from "../constants";
import { SignupHeader } from "./SignupHeader";
// import "./NicknameOnboarding.css";

const Signup = () => {
    return (
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
                        />
                    </React.Fragment>
                ))}
            </div>
            <div>
                <Button>{SIGNUP_BTN.complete}</Button>
            </div>
        </Wrapper>
    )
}

export default Signup;