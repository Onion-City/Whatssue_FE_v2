"use client";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import "./AuthBox.css";
import { AUTH_BTN, AUTH_PLACEHOLDER } from "./const";


export interface AuthBoxProps {
    field?: ControllerRenderProps<any, any>;
  }

export const AuthBox = ({field}: AuthBoxProps) => {
    const [display, setDisplay] = useState(false);
    const [authNum, setAuthNum] = useState({
        toNumber: "",
        certificationNum: 0
    });

    const handleAuthnum = () => {
        setDisplay(true);
        // mutate({
        //     toNumber: 
        // })
        // handleSubmit(onSubmit);
        // console.log(getValues());
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
                    name="userPhone"
                    placeholder={AUTH_PLACEHOLDER.mobile}
                    field={field}
                    // value={authNum.toNumber}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthNum((prev) => ({
                    //     ...prev,
                    //     toNumber: e.target.value
                    // }))}
                    // register={register}
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
                    // register={register}
                />
                <Button size="sm">{AUTH_BTN.checkNum}</Button>
            </div>) :
            <></>
            }
        </>
    );
};
