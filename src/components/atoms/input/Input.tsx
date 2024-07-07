// Input.tsx
"use client";

import { COLORS } from "@/styles";
import { forwardRef, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { Text } from "../text";
import "./input.css";

export interface InputProps {
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg' | 'pr';
  color?: 'bk' | 'wt';
  maxCnt?: number;
  name?: string;
  error?: boolean;
  value?: string | number;
  field?: ControllerRenderProps<any, any>;
  control?: any;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    size = "lg", 
    color,
    placeholder = "", 
    maxCnt = 0, 
    name, 
    error,
    value, 
    field,
    control,
    ...props 
  }, ref) => {
    const [textCnt, setTextCnt] = useState(field?.value ? String(field.value).length : 0);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTextCnt(e.target.value.length);
      field?.onChange(e);
    };

    return (
      <div className="input__wrapper">
        <input 
          type="text"
          className={`input ${size} ${color} ${error && "error"}`}
          placeholder={placeholder}
          onChange={handleChangeInput}
          value={field?.value || ""}
          maxLength={maxCnt !== 0 ? maxCnt : undefined}
          name={name}
          ref={ref}
          {...props}
        />
        {maxCnt !== 0 && (
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
);

Input.displayName = "Input";
