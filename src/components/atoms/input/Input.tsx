"use client";

import React, { forwardRef, useState } from "react";
import { UseControllerProps, useController } from "react-hook-form";
import "./input.css";

export interface InputProps extends UseControllerProps{
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  maxCnt?: number;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ control, size = "lg", placeholder = "", maxCnt = 0, name = '', ...props }, ref) => {
    const [textCnt, setTextCnt] = useState(0);
    const {
      field,
      fieldState: { error }
    } = useController({ name, control });

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTextCnt(e.target.value.length);
    }

    return (
      <div className="input__wrapper">
        <input 
          ref={ref}
          type="text"
          className={`input ${size}`}
          placeholder={placeholder}
          onChange={field.onChange}
          value={field.value || ''}
          maxLength={maxCnt !== 0 ? maxCnt : undefined}
          name={name}
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
