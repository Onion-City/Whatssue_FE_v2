"use client";
import { Text } from "@/components/atoms/text";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div onClick={() => router.push("/user/club")}>
        <Text
          color="#fff"
          fontSize="1rem"
        >모임 생성 페이지</Text>
      </div>
      <div onClick={() => router.push("/user/onboarding")}>
        <Text
          color="#fff"
          fontSize="1rem"
        >모임 가입 온보딩(닉네임) 페이지</Text>
      </div>
    </>
  );
}
