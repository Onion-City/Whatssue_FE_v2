"use client";
import chiikyaw from "@/assets/images/chiikyaw.png";
import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import { Wrapper } from "@/components/organisms/Wrapper";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { REGISTER_BTN, REGISTER_COMPLETE_ARR } from "../constants";
import "./ThirdClubRegister.css";

const ThirdClubRegister = (data: any) => {
  const router = useRouter();
  console.log(data);
  return (
    <Wrapper isHeader={true}>
      <div className="register3__content">
        <div className="register3__clubInfo">
          <div className="register3_clubInfo__img">
            <Image
              src={chiikyaw}
              alt="clubImg"
              className="register3__clubInfo__img"
            />
          </div>
          <Text color="#51F8C4" fontSize="1.3125rem" fontWeight="700">
            치이카와
          </Text>
        </div>
        <div className="register3__text">
          {REGISTER_COMPLETE_ARR.map((text, index) => (
            <div key={index} className="register3__text__item">
              <Text color="#fff" fontSize="1.0625rem" fontWeight="700">
                {text}
              </Text>
            </div>
          ))}
        </div>
      </div>
      <div className="register3__rowBtn">
        <Button
          backgroundColor="#404040"
          color="#fff"
          size="sm"
          onClick={() => router.push("/")}
        >
          {REGISTER_BTN.home}
        </Button>
        <Button size="md" onClick={() => router.push("/")}>
          {REGISTER_BTN.toClub}
        </Button>
      </div>
    </Wrapper>
  );
};

export default ThirdClubRegister;
