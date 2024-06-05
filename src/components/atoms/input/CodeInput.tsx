import React, { forwardRef, useRef, useEffect } from "react";
import { UseControllerProps } from "react-hook-form";
import "./input.css";

export interface InputProps extends UseControllerProps {
  maxCnt?: number;
  index?: number;
  setFocus?: (index: number) => void;
  onValueChange?: (index: number, value: string) => void;
}

export const CodeInput = forwardRef<HTMLInputElement, InputProps>(
  (
    { maxCnt = 1, name = "", index, setFocus, onValueChange, ...props },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (inputRef.current && ref) {
        if (typeof ref === "function") {
          ref(inputRef.current);
        } else {
          (ref as React.MutableRefObject<HTMLInputElement | null>).current =
            inputRef.current;
        }
      }
    }, [ref]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (value.length >= maxCnt) {
        setFocus && setFocus(index! + 1);
      }
      onValueChange && onValueChange(index!, value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && !inputRef.current?.value) {
        setFocus && setFocus(index! - 1);
      }
    };

    return (
      <div className="num_input__wrapper">
        <input
          ref={inputRef}
          type="text"
          className="num_input"
          maxLength={maxCnt !== 0 ? maxCnt : undefined}
          name={name}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          {...props}
        />
      </div>
    );
  }
);

CodeInput.displayName = "Input";
