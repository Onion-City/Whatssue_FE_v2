"use client";

import { useSearchParams } from "next/navigation";
import NicknameOnboarding from "./components/NicknameOnboarding";
import RealnameOnboarding from "./components/RealnameOnboarding";

export default function SetupUserOnboarding() {
  // 유저 모임 가입 온보딩 페이지
  const searchParams = useSearchParams();
  const policy = searchParams.get("policy");

  return (
    <>
      {policy === "NICK_NAME" ? <NicknameOnboarding /> : <RealnameOnboarding />}
    </>
  );
}
