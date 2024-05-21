"use client";
import { IMAGES } from "@/constants/images";
import Image from "next/image";
import "./Login.css";

export default function LoginBtn() {
  const handleLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_API_KEY}&redirect_url=${process.env.NEXT_PUBLIC_REDIRECT_URL}&response_type=code`
  }
  return (
    <Image src={IMAGES.loginKakao} alt="kakao login" className="login_kakao" onClick={handleLogin}/>
  );
}
