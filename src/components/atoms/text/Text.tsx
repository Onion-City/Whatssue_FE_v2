import React, { ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
  content: string;
  color: string;
  fontSize: string;
  fontWeight: string;
}

export function Text({ children, color = "#000", fontSize = "1rem", fontWeight = "700" }: TextProps) {
  const textStyle: React.CSSProperties = {
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight
  };

  return <span style={textStyle}>{children}</span>;
}
