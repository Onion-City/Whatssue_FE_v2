import React, { forwardRef, useState } from "react";
import { UseControllerProps, useController } from "react-hook-form";
import "./input.css";

export interface InputProps extends UseControllerProps {
  size?: "sm" | "md" | "lg";
  maxCnt?: number;
}

export const CodeInput = forwardRef<HTMLInputElement, InputProps>(
  ({ control, size = "lg", maxCnt = 1, name = "", ...props }, ref) => {
    // const {
    //   field,
    //   fieldState: { error },
    // } = useController({ name, control });

    // const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   const inputValue = e.target.value;
    //   const filteredInput = inputValue.replace(/[^0-9]/g, "");
    //   field.onChange(filteredInput);
    // };

    return (
      <div className="num_input__wrapper">
        <input
          ref={ref}
          type="text"
          className="num_input"
          // onChange={handleChangeInput}
          // value={field.value || ""}
          maxLength={maxCnt !== 0 ? maxCnt : undefined}
          name={name}
          {...props}
        />
        {/* {error && <p className="error">{error.message}</p>} */}
      </div>
    );
  }
);

CodeInput.displayName = "Input";
