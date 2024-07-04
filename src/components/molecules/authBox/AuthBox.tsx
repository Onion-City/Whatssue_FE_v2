"use client";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { useCertificationMutation } from "@/hook/user/useCertificationMutation";
import { useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import "./AuthBox.css";
import { AUTH_BTN, AUTH_PLACEHOLDER } from "./const";


export interface AuthBoxProps {
    field?: ControllerRenderProps<any, any>;
    getValues?: any;
    error?: boolean;
  }

export const AuthBox = ({field, getValues, error}: AuthBoxProps) => {
    const [display, setDisplay] = useState(false);
    const [authNum, setAuthNum] = useState({
        toNumber: "",
        certificationNum: 0
    });

    const { mutate, isSuccess } = useCertificationMutation();

    const handleAuthnum = async () => {
        setDisplay(true);
        console.log(getValues("userPhone"));
        mutate({
            toNumber: getValues("userPhone")
        });
        // console.log(data);
        // handleSubmit(onSubmit);
        // console.log(getValues());
    }

    const checkAuthNum = () => {
        // 인증번호 확인
    }

    return(
        <>
            <div className="signup__inputBox">
                <Input 
                    size="md"
                    name="userPhone"
                    placeholder={AUTH_PLACEHOLDER.mobile}
                    field={field}
                    error={error}
                    // value={authNum.toNumber}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthNum((prev) => ({
                    //     ...prev,
                    //     toNumber: e.target.value
                    // }))}
                    // register={register}
                />
                <Button 
                    size="sm"
                    type="button"
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
                <Button 
                    type="button"
                    size="sm"
                    onClick={checkAuthNum}
                >{AUTH_BTN.checkNum}</Button>
            </div>) :
            <></>
            }
        </>
    );
};
