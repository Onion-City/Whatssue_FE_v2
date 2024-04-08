"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/user/club")}>메인페이지</div>
  );
}
