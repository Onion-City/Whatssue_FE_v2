// Input.tsx
"use client";

import { forwardRef, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import "./input.css";

export interface InputProps {
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  maxCnt?: number;
  name: string;
  value?: string | number;
  field: ControllerRenderProps<any, any>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    size = "lg", 
    placeholder = "", 
    maxCnt = 0, 
    name, 
    value, 
    field,
    ...props 
  }, ref) => {
    const [textCnt, setTextCnt] = useState(field.value ? String(field.value).length : 0);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTextCnt(e.target.value.length);
      field.onChange(e);
    };

    return (
      <div className="input__wrapper">
        <input 
          type="text"
          className={`input ${size}`}
          placeholder={placeholder}
          onChange={handleChangeInput}
          value={field.value || ""}
          maxLength={maxCnt !== 0 ? maxCnt : undefined}
          name={name}
          ref={ref}
          {...props}
        />
        {maxCnt !== 0 && (
          <p>
            <span>{textCnt}</span>
            <span>/{maxCnt}</span>
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
