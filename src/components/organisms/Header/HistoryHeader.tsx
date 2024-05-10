"use client";
import { Text } from "@/components/atoms/text";
import { IMAGES } from "@/constants/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./Header.css";

interface HistoryHeaderProps {
  title?: string;
}

export function HistoryHeader({title} : HistoryHeaderProps) {
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
        <Text
          color="#fff"
          fontSize="1.0625rem"
        >{title && title}</Text>
        <span
          style={{ "width": "0.75rem" }}
        ></span>
      </div>
    </header>
  );
}
