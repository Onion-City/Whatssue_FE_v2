"use client";

import { ReactNode, useEffect, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import "./Toggle.css";

export interface ToggleProps {
  children?: ReactNode;
  color?: string;
  backgroundColor?: string;
  size?: string;
  height?: string;
  width?: string;
  fontSize?: string;
  content?: string;
  name?: string;
  field?: ControllerRenderProps<any, any>;
}

export function Toggle({
  height = "2rem",
  width = "4rem",
  name,
  field
}: ToggleProps) {
  const [on, setOn] = useState(field?.value || false);

  useEffect(() => {
    setOn(field?.value || false);
  }, [field?.value]);

  const changeToggle = () => {
    const newValue = !on;
    setOn(newValue);
    field?.onChange(newValue);
  };
  const toggleClassName = `toggle-btn ${on ? "on" : "off"}`;

  const inputStyle: React.CSSProperties = {
    border: "none",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0px",
    position: "absolute",
    width: "1px",
    whiteSpace: "nowrap",
  };

  const spanStyle: React.CSSProperties = {
    boxSizing: "initial",
    display: "inline-block",
    outline: "0",
    width: width,
    height: height,
    position: "relative",
    cursor: "pointer",
    userSelect: "none",
    backgroundColor: on ? "#51F8C4" : "#404040",
    borderRadius: "2rem",
    padding: "2px",
    transition: "all 0.4s ease",
    border: "2px solid #e8eae9",
  };
  return (
    <label aria-label={"Toggle"} style={{ display: "block" }}>
      <input
        className="toggle-input"
        style={inputStyle}
        type="checkbox"
        checked={on}
        onChange={changeToggle}
        data-testid="toggle-input"
      />
      <span
        className={toggleClassName}
        style={spanStyle}
        // onClick={changeToggle}
      />
    </label>
  );
}
