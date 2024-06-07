import React, { ReactNode } from "react";

export interface ChipProps {
  children?: ReactNode;
  chipOn?: boolean;
  onClick?: any;
}

export function Chip({
  children,
  chipOn = false,
  onClick,
}: ChipProps) {
  const chipStyle: React.CSSProperties = {
    backgroundColor: chipOn ? "#51F8C4" : "#404040",
    width: "5.4375rem",
    padding: "0.65rem 0",
    color: chipOn ? "#2B2B2B" : "#D9D9D9",
    borderRadius: "50px",
    fontSize: "0.8125rem",
    fontWeight: "500",
    cursor: "pointer",
    textAlign: "center",
    fontFamily: "Pretendard Variable",
  };

  return (
    <span style={chipStyle} onClick={onClick}>
      {children}
    </span>
  );
}
