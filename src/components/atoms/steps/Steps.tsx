import "rsuite/dist/rsuite.css";
import styled from "styled-components";

export interface StepProps {
  currentStep: number;
  content: string;
  color: string;
  fontSize: string;
  fontWeight: string;
}

export function Step({ currentStep = 1, color = "#000", fontSize = "1rem", fontWeight = "700" }: StepProps) {
  const StepWrapper = styled.div`
    position: relative;
    z-index: 1;
    width: 30vw;

    display: flex;

  `

  const StepStyle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #51F8C4;
    border: 3px solid #51F8C4;
    transition: 0.4s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const StepLineWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  `;

  const StepLine = styled.div`
    height: 2px;
    width: 100%;
    background-color: ${currentStep === 1 ? "#404040" : "#51F8C4"};
  `;

  const StepCount = styled.span`
    font-size: 19px;
    color: #000000;
  `

  return (
    <StepWrapper>
      <StepStyle>
        <StepCount>1</StepCount>
      </StepStyle>
      <StepLineWrapper>
        <StepLine></StepLine>
      </StepLineWrapper>
      <StepStyle>
        <StepCount>2</StepCount>
      </StepStyle>
    </StepWrapper>
  );
}
