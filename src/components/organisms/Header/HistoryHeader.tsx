"use client";
import { IMAGES } from "@/constants/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./Header.css";

export function HistoryHeader() {
  const router = useRouter();
  return (
    <header id="header">
      <div className="historyHeader">
        <Image
          src={IMAGES.back}
          alt="back"
          placeholder="blur"
          onClick={() => router.back()}
          className="historyHeader__img"
        />
      </div>
    </header>
  );
}
