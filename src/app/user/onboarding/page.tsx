import SetupUserOnboarding from "@/features/user/onboarding/SetupUserOnboarding";
import { Suspense } from "react";

const UserOnboarding = () => {
  // 모임 가입 온보딩 페이지
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SetupUserOnboarding />
    </Suspense>
  );
};

export default UserOnboarding;
