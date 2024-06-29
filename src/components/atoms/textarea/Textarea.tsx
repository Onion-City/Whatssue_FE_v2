"use client";

import React, { useState } from "react";
import { ControllerRenderProps } from "react-hook-form";

import { COLORS } from "@/styles";
import { Text } from "../text/Text";
import "./textarea.css";

export interface TextareaProps {
  content?: string;
  backgroundColor?: string;
  color?: string;
  size?: string;
  height?: string;
  fontSize?: string;
  maxCnt?: number;
  isBorder?: boolean;
  name?: string;
  field?: ControllerRenderProps<any, any>;
  value?: string;
  onChange?: (value: string) => void;
}

export function Textarea({ 
  backgroundColor = "#2B2B2B", 
  color = "#fff", 
  size = "big", 
  height = "12rem", 
  fontSize = "16px", 
  content = "", 
  maxCnt, 
  isBorder = false,
  name, 
  field,
  value,
  onChange,
  ...rest
}: TextareaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [textCnt, setTextCnt] = useState(field?.value ? String(field.value).length : 0);
  const style: React.CSSProperties = {
    backgroundColor: backgroundColor,
    color: color,
    width: size === "big" ? "90vw" : (size === "pr") ? "70%" : "50vw",
    height: height,
    fontSize: fontSize,
    padding: "1rem",
    border: isBorder ? "1px solid #989898" : isFocused ? "none" : "1px solid #fff",
    cursor: "pointer",
    borderRadius: "10px",
    outline: isBorder ? "1px solid #666666" : isFocused ? "1px solid #51F8C4" : "none",
    resize: "none",
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleTextCnt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setTextCnt(newValue.length);
    if (onChange) onChange(newValue);
    if (field?.onChange) field?.onChange(newValue);
  };

  return (
    <div className="textarea__wrapper">
      <textarea 
        style={style} 
        placeholder={content}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleTextCnt}
        maxLength={maxCnt && maxCnt}
        name={name}
        value={value !== undefined ? value : field?.value || ""}
        {...rest}
      />
      {maxCnt !== undefined && (
        <p>
          <Text
            color={COLORS.white}
            fontWeight="500"
          >{textCnt}</Text>
          <Text
            color={COLORS.white}
            fontWeight="500"
          >/{maxCnt}</Text>
        </p>
      )}
    </div>
  );
}
