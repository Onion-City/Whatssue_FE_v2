import React, { useState } from "react";

export interface InputProps {
  content: string;
  backgroundColor?: string;
  color: string;
  size: string;
  height: string;
  fontSize: string;
}

export function Input({ backgroundColor = "#2B2B2B", color = "#fff", size = "big", height = "3.5rem", fontSize = "16px", content = "" }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const style: React.CSSProperties = {
    backgroundColor: backgroundColor,
    color: color,
    width: size === "big" ? "90vw" : "50vw",
    height: height,
    fontSize: fontSize,
    cursor: "pointer",
    borderRadius: "10px",
    padding: "0 1rem", 
    outline: isFocused ? "1px solid #51F8C4" : "none",
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return <input style={style} placeholder={content} onFocus={handleFocus} onBlur={handleBlur}/>;
}
