"use client";

import { forwardRef, useState } from "react";
import { UseControllerProps } from "react-hook-form";
import "./input.css";

export interface InputProps extends UseControllerProps{
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  maxCnt?: number;
  register: any;
  value?: string | number;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ register, size = "lg", placeholder = "", maxCnt = 0, name = '', value, ...props }, ref) => {
    const [textCnt, setTextCnt] = useState(0);
    // const {
    //   field,
    //   fieldState: { error }
    // } = useController({ name, control });

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTextCnt(e.target.value.length);
      // field.onChange(e);
    }

    return (
      <div className="input__wrapper">
        <input 
          type="text"
          className={`input ${size}`}
          placeholder={placeholder}
          onChange={handleChangeInput}
          value={value}
          maxLength={maxCnt !== 0 ? maxCnt : undefined}
          name={name}
          {...register(name)}
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
