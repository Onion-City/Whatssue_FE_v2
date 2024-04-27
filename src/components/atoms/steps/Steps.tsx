import "./steps.css";

export interface StepProps {
  currentStep?: number;
  content?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export function Step({ currentStep = 1 }: StepProps) {
  return (
    <div className="step">
      <div className="step__content">
        <div className="step__content__element">
          <span className="step__content__element__text">1</span>
        </div>
        <div className="step__content__line">
          <div
            className={
              currentStep === 2
                ? "step__content__line__item"
                : "step__content__line__item step__content__line__item--active"
            }
          ></div>
        </div>
        <div
          className={
            currentStep === 2
              ? "step__content__element"
              : "step__content__element step__content__element--active"
          }
        >
          <span
            className={
              currentStep === 2
                ? "step__content__element__text"
                : "step__content__element__text step__content__element__text--active"
            }
          >
            2
          </span>
        </div>
      </div>
    </div>
  );
}
