import React, { ReactNode } from "react";
import "./Button.css";

export interface ButtonProps {
  children?: ReactNode;
  onClick?: () => any;
  color?: string;
  backgroundColor?: string;
  width?: string;
  size?: 'sm' | 'md' | 'lg' | 'pr' | 'lt' | 'rt';
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export function Button({ children, onClick, color = "#2b2b2b", backgroundColor = "#51F8C4", size = "lg", fontSize = "1rem", fontWeight = "700", type = "submit" }: ButtonProps) {
  const style: React.CSSProperties = {
    color: color,
    backgroundColor: backgroundColor,
    fontSize: fontSize,
    fontWeight: fontWeight,
  };
  return <button onClick={onClick} className={`btn ${size}`} style={style} type={type}>{children}</button>;
}
