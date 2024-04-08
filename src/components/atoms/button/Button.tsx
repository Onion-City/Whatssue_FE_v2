import React, { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  onClick?: () => any;
  color?: string;
  backgroundColor?: string;
  width?: string;
  size?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
}

export function Button({ children, onClick, color = "#2b2b2b", backgroundColor = "#51F8C4", width = "90vw", size = "big", fontSize = "1rem", fontWeight = "700" }: ButtonProps) {
  const style: React.CSSProperties = {
    color: color,
    backgroundColor: backgroundColor,
    width: width,
    fontSize: fontSize,
    fontWeight: fontWeight,
    padding: "1rem 0",
    cursor: "pointer",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Pretendard Variable",
  };
  return <div onClick={onClick} style={style}>{children}</div>;
}
