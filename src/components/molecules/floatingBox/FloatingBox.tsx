"use client";
import { Floating } from "@/components/atoms/floating/index";
import { ICONS } from "@/constants/images";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./FloatingBox.css";

export function FloatingBox() {
  const router = useRouter();
  const [on, setOn] = useState(false);
  const handleFloating = () => {
    setOn((prev) => !prev);
  };
  const handleRouteOnboarding = () => {
    router.push("/user/club/create");
  };
  const handleRouteJoin = () => {
    router.push("/user/club/join");
  };

  const inPlusStyle: React.CSSProperties = {
    width: "1.625rem",
    height: "1.625rem",
    transition: "all 0.4s ease",
    transform: on ? "rotate(-45deg)" : "rotate(0deg)",
  };
  const inMeetingStyle: React.CSSProperties = {
    width: "1.44319rem",
    height: "1.26606rem",
  };
  const inJoinStyle: React.CSSProperties = {
    width: "1.125rem",
    height: "1.5625rem",
  };

  const handleSubmit = () => {
      router.push("/");
  };
  return (
    <div className="floating__box">
      <div className={`floating__box__inner ${on ? "visible" : ""}`}>
        {/* {on && ( */}
        <>
          <Floating
            img={ICONS.floatingMeeting}
            alt="Meeting"
            onClick={on ? handleRouteOnboarding : undefined}
            inStyle={inMeetingStyle}
            text="모임 생성하기"
          />
          <Floating
            img={ICONS.floatingLock}
            alt="Lock"
            onClick={on ? handleRouteJoin : undefined}
            inStyle={inJoinStyle}
            text="초대코드로 모임 가입"
          />
        </>
        {/* )} */}
      </div>
      <Floating
        backgroundColor="#51F8C4"
        img={ICONS.floatingPlus}
        alt="Plus"
        inStyle={inPlusStyle}
        onClick={handleFloating}
      />
    </div>
  );
}
