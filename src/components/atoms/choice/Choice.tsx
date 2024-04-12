import { Text } from "@/components/atoms/text";
import React, { ReactNode } from "react";
import "./Choice.css";

export interface ChoiceProps {
  children?: ReactNode;
  color: string;
  onClick: () => void;
}

export function Choice({
  color,
  onClick,
  children,
}: React.PropsWithChildren<ChoiceProps>) {
  return (
    <div className="choice__box" onClick={onClick}>
      <Text color={color} fontSize="0.9375rem" fontWeight="600">
        {children}
      </Text>
    </div>
  );
}

export interface ChoiceLineProps {
  color: string;
}

export function ChoiceLine({ color }: ChoiceLineProps) {
  return <hr className="choice__line" style={{ background: color }} />;
}
