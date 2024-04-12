import { Choice, ChoiceLine } from "@/components/atoms/choice";
import React from "react";
import "./ChoiceBox.css";

export interface ChoiceBoxProps {
  isSelected: number;
  textLeft: string;
  textRight: string;
  onClick: (selected: number) => void;
}

export const ChoiceBox = ({
  isSelected,
  textLeft,
  textRight,
  onClick,
}: React.PropsWithChildren<ChoiceBoxProps>) => {
  const handleChoice = (selected: number) => {
    onClick(selected);
  };
  const leftColor = isSelected === 0 ? "#51F8C4" : "#989898";
  const rightColor = isSelected === 1 ? "#51F8C4" : "#989898";

  return (
    <div className="choice_box_wrapper">
      <div className="choice_box">
        <Choice color={leftColor} onClick={() => handleChoice(0)}>
          {textLeft}
        </Choice>
        <Choice color={rightColor} onClick={() => handleChoice(1)}>
          {textRight}
        </Choice>
      </div>
      <div className="choice_box__line_wrapper">
        <ChoiceLine color={leftColor} />
        <ChoiceLine color={rightColor} />
      </div>
    </div>
  );
};
