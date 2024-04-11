import Image from "next/image";
import { IMAGES } from "@/constants/images";
import "./LoginBtn.css";

export default function LoginBtn() {
  return (
    <Image src={IMAGES.loginKakao} alt="kakao login" className="login_kakao" />
  );
}
