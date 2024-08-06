"use client";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Text } from "@/components/atoms/text";
import { useCertificationMutation } from "@/hook/user/useCertificationMutation";
import { useCertificationQuery } from "@/hook/user/useCertificationQuery";
import { COLORS } from "@/styles";
import useToast from "@/utils/useToast";
import { useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import "./AuthBox.css";
import { AUTH_BTN, AUTH_PLACEHOLDER, AUTH_TITLE } from "./const";


export interface AuthBoxProps {
    field?: ControllerRenderProps<any, any>;
    getValues?: any;
    error?: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthBox = ({field, getValues, error, setIsAuth}: AuthBoxProps) => {
    const [display, setDisplay] = useState(false);
    const [certificationNum, setCertificationNum] = useState<number | undefined>(undefined);
    const toNumber = getValues("userPhone");
    const { showToast } = useToast();

    const { mutate, isSuccess, isError } = useCertificationMutation();
    const { certificationQuery } = useCertificationQuery();

    const handleAuthnum = async () => {
        if (!toNumber) {
            alert('전화번호를 입력하세요.');
            return;
        }
        setDisplay(true);
        console.log(toNumber);
        await mutate({
            toNumber: toNumber
        });

        if (isSuccess) {
            alert('인증번호가 발송되었습니다.');
            return;
        }
        if (isError) {
            alert('인증번호 발송에 실패하였습니다.');
            return;
        }
    }

    const checkAuthNum = async () => {
        // 인증번호 확인
        const authNum = {
            toNumber: toNumber,
            certificationNum: certificationNum || 0
        }
        try {
            const data = await certificationQuery(authNum);
            console.log(data.status);
            // if (data.status === 200) {
                showToast({
                    message: '인증이 완료되었습니다.', 
                    type: 'success'
                });
                setIsAuth(true);
            // } 
        } catch (err) {
            showToast({
                message: '인증번호가 올바르지 않습니다.', 
                type: 'error'
            });
            console.log(err);
        }
    }

    return(
        <>
            <div className="registerBox">
                <div className="textBox">
                    <Text fontSize="1.1875rem" color={COLORS.white}>
                        {AUTH_TITLE}
                    </Text>
                    <Text fontSize="1.1875rem" color={COLORS.red}>
                        *
                    </Text>
                </div>
                <div className="signup__inputBox">
                    <Input 
                        size="md"
                        name="userPhone"
                        placeholder={AUTH_PLACEHOLDER.mobile}
                        field={field}
                        error={error}
                    />
                    <Button 
                        size="sm"
                        type="button"
                        onClick={handleAuthnum}
                    >{display ? AUTH_BTN.retryNum : AUTH_BTN.getNum}</Button>
                </div>
                {error && (
                    <span
                        className="error-msg"
                    >
                        <Text
                            color={COLORS.red}
                            fontWeight="500"
                        >필수 정보입니다.</Text>
                    </span>
                )}
                {display ? 
                (<div className="signup__inputBox">
                    <input 
                        value={certificationNum}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCertificationNum(+e.target.value)}
                        placeholder={AUTH_PLACEHOLDER.authNum}
                    />
                    <Button 
                        size="sm"
                        type="button"
                        onClick={checkAuthNum}
                    >{AUTH_BTN.checkNum}</Button>
                </div>) :
                <></>
                }
            </div>
        </>
    );
};
