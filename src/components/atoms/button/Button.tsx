import React, { ReactNode } from "react";
import "./Button.css";

export interface ButtonProps {
  children?: ReactNode;
  onClick?: () => any;
  color?: string;
  backgroundColor?: string;
  width?: string;
  size?: 'sm' | 'md' | 'lg';
  height?: string;
  fontSize?: string;
  fontWeight?: string;
}

export function Button({ children, onClick, color = "#2b2b2b", backgroundColor = "#51F8C4", size = "lg", fontSize = "1rem", fontWeight = "700" }: ButtonProps) {
  const style: React.CSSProperties = {
    color: color,
    backgroundColor: backgroundColor,
    fontSize: fontSize,
    fontWeight: fontWeight,
  };
  return <div onClick={onClick} className={`btn ${size}`} style={style}>{children}</div>;
}
