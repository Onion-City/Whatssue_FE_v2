"use client"; // 클라이언트 컴포넌트로 지정

import { CodeInput } from "@/components/atoms/input/CodeInput";
import { Text } from "@/components/atoms/text";
import "./EnterInvitationCode.css";
import { Button } from "@/components/atoms/button";
import { HistoryHeader } from "@/components/organisms/Header";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import {
  ENTER_INVITATION_CODE,
  JOIN_BTN,
  RECEIVE_INVITATION_CODE,
} from "../constants/const";
import React, { useRef, useState, useEffect } from "react";

const EnterInvitationCode = () => {
  const [codeValues, setCodeValues] = useState<string[]>(Array(6).fill(""));
  const [isComplete, setIsComplete] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const setFocus = (index: number) => {
    if (index >= 0 && index < inputRefs.current.length) {
      inputRefs.current[index]?.focus();
    }
  };

  const handleRef = (index: number): React.RefCallback<HTMLInputElement> => {
    return (el) => {
      inputRefs.current[index] = el;
    };
  };

  const handleValueChange = (index: number, value: string) => {
    const newValues = [...codeValues];
    newValues[index] = value;
    setCodeValues(newValues);
  };

  useEffect(() => {
    const allFilled = codeValues.every((value) => value.length > 0);
    setIsComplete(allFilled);

    if (allFilled) {
      inputRefs.current.forEach((input) => input?.blur());
    }
  }, [codeValues]);

  return (
    <div className="invitation_code">
      <HistoryHeader />
      <Image
        src={IMAGES.lockWhite}
        alt="lock"
        className="invitation_code_icon"
      />

      <div className="invitation_code__title">
        <Text color="#FFF" fontSize="1.3125rem" fontWeight="600">
          {ENTER_INVITATION_CODE}
        </Text>
        <Text color="#D9D9D9" fontSize="0.9375rem" fontWeight="500">
          {RECEIVE_INVITATION_CODE}
        </Text>
      </div>

      <div className="invitation_code__input">
        {[...Array(6)].map((_, index) => (
          <CodeInput
            key={index}
            name={`invitationCode${index + 1}`}
            index={index}
            setFocus={setFocus}
            onValueChange={handleValueChange}
            ref={handleRef(index)}
          />
        ))}
      </div>

      <div className="invitation_code__enter">
        <Button
          backgroundColor={isComplete ? "#51F8C4" : "#404040"}
          color={isComplete ? "#2B2B2B" : "#fff"}
          // onClick={() => {
          //   if (isComplete) alert("Code Submitted!");
          // }}
        >
          {JOIN_BTN}
        </Button>
      </div>
    </div>
  );
};

export default EnterInvitationCode;
