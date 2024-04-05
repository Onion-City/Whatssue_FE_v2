import React, { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  color?: string;
  backgroundColor?: string;
  size?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
}

export function Button({ children, color = "#2b2b2b", backgroundColor = "#51F8C4", size = "big", fontSize = "1rem", fontWeight = "700" }: ButtonProps) {
  const style: React.CSSProperties = {
    color: color,
    backgroundColor: backgroundColor,
    width: size === "big" ? "90vw" : "50vw",
    fontSize: fontSize,
    fontWeight: fontWeight,
    padding: "1rem 0",
    cursor: "pointer",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Pretendard Variable",
  };
  return <div style={style}>{children}</div>;
}
