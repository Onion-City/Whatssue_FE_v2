"use client";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { useRouter } from "next/navigation";
import { EDIT_ACCOUNT_INFO } from "../constants/const";
import "./EditProfileHeader.css";

export const EditProfileHeader = () => {
  const router = useRouter();
  return (
    <div className="edit_profile_header">
      <Image
        src={IMAGES.back}
        alt="back"
        placeholder="blur"
        onClick={() => router.back()}
        className="edit_profile_header__back"
      />
      <span className="edit_profile_header__title">{EDIT_ACCOUNT_INFO}</span>
    </div>
  );
};
