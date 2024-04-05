import { ReactNode, useState } from "react";
import "./Toggle.css";

export interface ToggleProps {
  children?: ReactNode;
  color?: string;
  backgroundColor?: string;
  size?: string;
  height?: string;
  fontSize?: string;
  content?: string;
}

export function Toggle({ children, color = "#2b2b2b", backgroundColor = "#51F8C4", size = "big", height = "3.5rem", fontSize = "16rem", content = "" }: ToggleProps) {
  const [on, setOn] = useState(false);
  const changeToggle = () => {
    setOn((prev) => !prev);
  }
  const toggleClassName = `toggle-btn ${on ? "on" : "off"}`

  const inputStyle: React.CSSProperties = {
    border: "none",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0px",
    position: "absolute",
    width: "1px",
    whiteSpace: "nowrap"
  };

  const spanStyle: React.CSSProperties = {
    boxSizing: "initial",
    display: "inline-block",
    outline: "0",
    width: "4rem",
    height: "2rem",
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
    <label aria-label={'Toggle'} style={{display: 'block'}}>
        <input
          className="toggle-input"
          style={inputStyle}
          type="checkbox"
          checked={on}
        //   onChange={noop}
          data-testid="toggle-input"
        />
        <span 
          className={toggleClassName} 
          style={spanStyle} 
          onClick={changeToggle}
        />
      </label>
  );
}