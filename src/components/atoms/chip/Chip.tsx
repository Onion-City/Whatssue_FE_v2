import React, { ReactNode, useState } from "react";

export interface ChipProps {
  children: ReactNode;
  chipOn: boolean;
//   backgroundColor?: string;
  width: string;
  height: string;
  content: string;
//   color?: string;
  borderRadius: string;
  fontSize: string;
  fontWeight: string;
}

export function Chip({ children, width = "5.2125rem", height = "2.125rem", padding = "0.75rem 2rem", borderRadius = "50px", fontSize = "1rem", fontWeight = "500" }: TextProps) {
  const [chipOn, setChipOn] = useState(false);
  const chipStyle: React.CSSProperties = {
    backgroundColor: chipOn ? "#51F8C4" : "#404040",
    width: width,
    height: height,
    padding: padding,
    color: chipOn ? "#2B2B2B" : "#D9D9D9",
    borderRadius: borderRadius,
    fontSize: fontSize,
    fontWeight: fontWeight,
    cursor: "pointer",
  };

  const handleChip = () => {
    setChipOn((prev) => !prev);
  }

  return <span style={chipStyle} onClick={handleChip}>{children}</span>;
}
