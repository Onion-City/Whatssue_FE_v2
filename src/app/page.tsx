"use client";
import SetupUserHome from "@/features/user/home/SetupUserHome";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <SetupUserHome />;
    </>
  );
}
