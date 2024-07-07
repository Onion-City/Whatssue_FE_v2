"use client"; // 클라이언트 컴포넌트로 지정

import { Button } from "@/components/atoms/button";
import { CodeInput } from "@/components/atoms/input/CodeInput";
import { Text } from "@/components/atoms/text";
import { HistoryHeader } from "@/components/organisms/Header";
import { IMAGES } from "@/constants/images";
import { fetchJoinClub } from "@/hook/clubJoin/useJoinClubQuery";
import useToast from "@/utils/useToast";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import {
  ENTER_INVITATION_CODE,
  JOIN_BTN,
  RECEIVE_INVITATION_CODE,
} from "../constants/const";
import "./EnterInvitationCode.css";

const EnterInvitationCode = () => {
  const [codeValues, setCodeValues] = useState<string[]>(Array(6).fill(""));
  const [isComplete, setIsComplete] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  const { showToast } = useToast();

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

  const onSubmit = async () => {
    if (isComplete) {
      try {
        const {
          data: clubInfo,
        } = await fetchJoinClub(codeValues.join(''));
        console.log(clubInfo);
        router.push(`/user/club/join/${clubInfo.clubId}`);
      } catch (error) {
        console.log(error);
        showToast({
          message: "존재하지 않는 모임코드입니다", 
          type: "error"
        });
      }
    }
  }

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
          onClick={onSubmit}
        >
          {JOIN_BTN.inviteCode}
        </Button>
      </div>
    </div>
  );
};

export default EnterInvitationCode;
