import SignupComplete from "@/features/user/signup/components/SignupComplete";
import { Suspense } from "react";

const UserSignupComplete = () => {
    // 추가 회원가입 완료 페이지
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SignupComplete />
        </Suspense>
    );
}

export default UserSignupComplete;