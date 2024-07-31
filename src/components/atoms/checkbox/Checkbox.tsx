import "./Checkbox.css";

export interface CheckboxProps {
  isChecked: boolean;
  handleChecked: () => void;
};

export const Checkbox = ({
  isChecked = false,
  handleChecked
}: CheckboxProps) => {
  return (
    <span
      className={`checkbox ${isChecked ? "checked" : ""}`}
      onClick={handleChecked}
    >
      <div></div>
    </span>
  )
}