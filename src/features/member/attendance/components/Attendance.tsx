"use client"; // 클라이언트 컴포넌트로 지정

import { CodeInput } from "@/components/atoms/input/CodeInput";
import { Text } from "@/components/atoms/text";
import "./Attendance.css";
import { Button } from "@/components/atoms/button";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { ATTEND_BTN } from "../constants/const";
import React, { useRef, useState, useEffect } from "react";
import { useAttendanceMutation } from "@/hook/attendance/member/useAttendanceMutation";

const Attendance: React.FC = () => {
  const ClubName = "코딩하는 도토리";
  const [codeValues, setCodeValues] = useState<string[]>(Array(3).fill(""));
  const [isComplete, setIsComplete] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const { mutate } = useAttendanceMutation({
    clubId: "club123",
    scheduleId: "schedule123",
    memberId: "member123",
  });

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

  const handleButtonClick = () => {
    if (isComplete) {
      const attendanceData = { attendanceNum: 0 }; // 실제 데이터를 사용하세요
      mutate(attendanceData);
    }
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
          onClick={handleButtonClick}
        >
          {ATTEND_BTN}
        </Button>
      </div>
    </div>
    // </Wrapper>
  );
};

export default Attendance;
