import React, { useState } from "react";

interface CustomSelectProps {
  options: string[];
  iconColorClass: string;
}

const AttendanceSelect: React.FC<CustomSelectProps> = ({
  options,
  iconColorClass,
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); // 옵션 클릭 시 셀렉트 박스 닫기
  };

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`attendance_select ${isOpen ? "open" : ""}`}>
      <div className="attendance_select__selected" onClick={toggleOptions}>
        <span
          className={`attendance_status_item__icon ${iconColorClass}`}
        ></span>
        {selectedOption}
      </div>
      {isOpen && (
        <div className="attendance_select__options">
          {options.map((option) => (
            <div
              key={option}
              className="attendance_select__option"
              onClick={() => handleOptionClick(option)}
            >
              <span
                className={`attendance_status_item__icon ${iconColorClass}`}
              ></span>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AttendanceSelect;
