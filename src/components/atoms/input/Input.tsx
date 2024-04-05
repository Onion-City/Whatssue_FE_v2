import React, { useState } from "react";
import styled from "styled-components";

export interface InputProps {
  content?: string;
  backgroundColor?: string;
  color?: string;
  size?: string;
  height?: string;
  fontSize?: string;
  maxCnt?: number;
}

export function Input({ backgroundColor = "#2B2B2B", color = "#fff", size = "big", height = "3.5rem", fontSize = "16px", content = "", maxCnt = 20 }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [textCnt, setTextCnt] = useState(0);
  const style: React.CSSProperties = {
    backgroundColor: backgroundColor,
    color: color,
    width: size === "big" ? "90vw" : "50vw",
    height: height,
    fontSize: fontSize,
    border: isFocused ? "none" : "1px solid #fff",
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

  const handleTextCnt = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setTextCnt(e.target.value.length);
  }

  return (
    <InputWrapper>
      <input 
        style={style} 
        placeholder={content}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleTextCnt}
        maxLength={maxCnt}
      />
      <p>
        <span>{textCnt}</span>
        <span>/{maxCnt}</span>
      </p>
    </InputWrapper>
  );
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  text-align: right;
  color: #fff;
`;