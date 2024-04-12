"use client";
import Image, { StaticImageData } from "next/image";
import { Text } from "../text";
import "./Floating.css";

export interface FloatingProps {
  text?: string;
  backgroundColor?: string;
  span?: string;
  img: StaticImageData;
  alt: string;
  inStyle?: React.CSSProperties;
  onClick?: () => void;
}

export function Floating({
  text,
  backgroundColor = "#fff",
  img,
  alt,
  inStyle,
  onClick,
}: FloatingProps) {
  return (
    <div
      id="triggerButton"
      aria-label={"Floating"}
      className="floating__wrapper"
      style={{ backgroundColor: `${backgroundColor}` }}
      onClick={onClick}
    >
      <Image src={img} alt={alt} className="floating__img" style={inStyle} />
      <Text
        color="#fff"
        fontSize="1.0625rem"
        fontWeight="500"
        className="floating__span"
      >
        {text}
      </Text>
    </div>
  );
}
