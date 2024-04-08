"use client";

import { useState } from "react";
import NicknameOnboarding from "./components/NicknameOnboarding";
import RealnameOnboarding from "./components/RealnameOnboarding";

export default function SetupUserOnboarding(
    ) {
    // 유저 모임 가입 온보딩 페이지
    const [method, setMethod] = useState(2); // 1: nickname, 2: realname

    return (
        <>
            {method === 1 ? (
                <NicknameOnboarding />
            ) : (
                <RealnameOnboarding />
            )}
        </>
    );
}
