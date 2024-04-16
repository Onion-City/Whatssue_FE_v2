"use client";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./AuthBox.css";
import { AUTH_BTN, AUTH_PLACEHOLDER } from "./const";

export const AuthBox = () => {
    const { control, handleSubmit, getValues } = useForm();
    const [display, setDisplay] = useState(false);
    const handleAuthnum = () => {
        setDisplay(true);
        handleSubmit(onSubmit);
        console.log(getValues());
    }

    const onSubmit = () => {
        // 폼 제출
        console.log("폼 제출");
    }

    return(
        <>
            <div className="signup__inputBox">
                <Input 
                    size="md"
                    name="mobile"
                    placeholder={AUTH_PLACEHOLDER.mobile}
                    control={control}
                />
                <Button 
                    size="sm"
                    onClick={handleAuthnum}
                >{display ? AUTH_BTN.retryNum : AUTH_BTN.getNum}</Button>
            </div>
            {display ? 
            (<div className="signup__inputBox">
                <Input 
                    size="md"
                    name="authNum"
                    placeholder={AUTH_PLACEHOLDER.authNum}
                    control={control}
                />
                <Button size="sm">{AUTH_BTN.checkNum}</Button>
            </div>) :
            <></>
            }
        </>
    );
};
