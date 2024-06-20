"use client";
import { IMAGES } from "@/constants/images";
import Image from "next/image";
import "./Login.css";

const LoginBtn: React.FC = () => {
  const handleLogin = () => {
<<<<<<< HEAD
    window.location.href = `${process.env.NEXT_PUBLIC_KAKAO_URL}`;
  }
=======
    window.location.href = `${process.env.NEXT_PUBLIC_LOCAL_KAKAO_URL}`;
  };

>>>>>>> 19f60f3341ca9980e224e89542687fab498d3460
  return (
    <Image
      src={IMAGES.loginKakao}
      alt="kakao login"
      className="login_kakao"
      onClick={handleLogin}
    />
  );
};

export default LoginBtn;
