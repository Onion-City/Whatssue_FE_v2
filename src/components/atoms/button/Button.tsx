import React, { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  color: string;
  backgroundColor: string;
  size: string;
  height: string;
  fontSize: string;
  content: string;
}

export function Button({ children, color = "#2b2b2b", backgroundColor = "#51F8C4", size = "big", height = "3.5rem", fontSize = "16rem", content = "" }: ButtonProps) {
  const style: React.CSSProperties = {
    color: color,
    backgroundColor: backgroundColor,
    width: size === "big" ? "90vw" : "50vw",
    height: height,
    fontSize: fontSize,
    content: content,
    cursor: "pointer",
    borderRadius: "10px",
    textAlign: "center",
  };
  return <div style={style}>{children}</div>;
}
