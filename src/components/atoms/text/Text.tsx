import React, { ReactNode } from "react";

export interface TextProps {
  children?: ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  className?: string;
  onClick?: any;
}

export function Text({
  children,
  color = "#000",
  fontSize = "1rem",
  fontWeight = "700",
  className = "",
  onClick
}: TextProps) {
  const textStyle: React.CSSProperties = {
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight,
    fontFamily: "Pretendard Variable",
  };

  return (
    <span style={textStyle} className={className} onClick={onClick}>
      {children}
    </span>
  );
}
