import React, { ReactNode, useState } from "react";

export interface ChipProps {
  children?: ReactNode;
  chipOn?: boolean;
  width?: string;
  height?: string;
  padding?: string;
  content?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
}

export function Chip({ children, width = "5.4375rem", height, padding = "0.65rem 0", borderRadius = "50px", fontSize = "1rem", fontWeight = "500" }: ChipProps) {
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
    textAlign: "center",
    fontFamily: "Pretendard Variable",
  };

  const handleChip = () => {
    setChipOn((prev) => !prev);
  }

  return <span style={chipStyle} onClick={handleChip}>{children}</span>;
}
