"use client"; // 클라이언트 컴포넌트로 지정

import { CodeInput } from "@/components/atoms/input/CodeInput";
import { Text } from "@/components/atoms/text";
import "./Attendance.css";
import { Button } from "@/components/atoms/button";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { ATTEND_BTN } from "../constants/const";
import React, { useRef, useState, useEffect } from "react";

const Attendance = () => {
  const ClubName = "코딩하는 도토리";
  const [codeValues, setCodeValues] = useState<string[]>(Array(3).fill(""));
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
    // <Wrapper isHeader={true}>
    <div className="attendance">
      <Image src={IMAGES.close} alt="close" className="attendance__close" />

      <Image src={IMAGES.attendance} alt="lock" className="attendance__icon" />
      <Text
        color="#FFF"
        fontSize="1.3125rem"
        fontWeight="600"
        className="attendance__club"
      >
        {ClubName}
      </Text>

      <div className="attendance__code">
        {[...Array(3)].map((_, index) => (
          <CodeInput
            key={index}
            name={`attendanceCode${index + 1}`}
            index={index}
            setFocus={setFocus}
            onValueChange={handleValueChange}
            ref={handleRef(index)}
          />
        ))}
      </div>

      <div className="attendance__enter">
        <Button
          backgroundColor={isComplete ? "#51F8C4" : "#404040"}
          color={isComplete ? "#2B2B2B" : "#fff"}
        >
          {ATTEND_BTN}
        </Button>
      </div>
    </div>
    // </Wrapper>
  );
};

export default Attendance;
