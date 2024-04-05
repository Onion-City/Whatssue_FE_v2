import React, { ReactNode } from "react";

export interface TextProps {
  children?: ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export function Text({ children, color = "#000", fontSize = "1rem", fontWeight = "700" }: TextProps) {
  const textStyle: React.CSSProperties = {
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight,
    fontFamily: "Pretendard Variable",
  };

  return <span style={textStyle}>{children}</span>;
}
