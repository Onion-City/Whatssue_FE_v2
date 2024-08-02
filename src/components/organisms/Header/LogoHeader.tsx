"use client";
import Person from "@/assets/images/ic_person.png";
import { ICONS } from "@/constants/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./Header.css";

//todo::
//알람 컴포넌트 연결
//주소지 연결
export function LogoHeader() {
  const router = useRouter();
  const handleAlarmModalOpen = () => {
    //알람 컴포넌트 연결
  };
  return (
    <header id="header">
      <div className="logoHeader">
        <div className="logoHeader__img__left">
          <Image
            src={ICONS.logo}
            alt="Logo"
            placeholder="blur"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="logoHeader__img__right">
          <Image
            src={ICONS.alarm}
            alt="Alarm"
            placeholder="blur"
            onClick={handleAlarmModalOpen}
          />
          <Image
            src={Person}
            alt="Person"
            placeholder="blur"
            onClick={() => router.push("/user/profile")}
          />
        </div>
      </div>
    </header>
  );
}
