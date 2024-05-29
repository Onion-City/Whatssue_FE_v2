"use client";

import React, { useState } from "react";
import { ControllerRenderProps } from "react-hook-form";

export interface TextareaProps {
  content?: string;
  backgroundColor?: string;
  color?: string;
  size?: string;
  height?: string;
  fontSize?: string;
  maxCnt?: number;
  name: string;
  field: ControllerRenderProps<any, any>;
}

export function Textarea({ 
  backgroundColor = "#2B2B2B", 
  color = "#fff", 
  size = "big", 
  height = "12rem", 
  fontSize = "16px", 
  content = "", 
  maxCnt = 300, 
  name, 
  field,
}: TextareaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [textCnt, setTextCnt] = useState(field.value ? String(field.value).length : 0);
  const style: React.CSSProperties = {
    backgroundColor: backgroundColor,
    color: color,
    width: size === "big" ? "90vw" : "50vw",
    height: height,
    fontSize: fontSize,
    padding: "1rem",
    border: isFocused ? "none" : "1px solid #fff",
    cursor: "pointer",
    borderRadius: "10px",
    outline: isFocused ? "1px solid #51F8C4" : "none",
    resize: "none",
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleTextCnt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextCnt(e.target.value.length);
    field.onChange(e);
  };

  return (
    <div className="input__wrapper">
      <textarea 
        style={style} 
        placeholder={content}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleTextCnt}
        maxLength={maxCnt}
        name={name}
        value={field.value || ""}
      />
      <p>
        <span>{textCnt}</span>
        <span>/{maxCnt}</span>
      </p>
    </div>
  );
}
