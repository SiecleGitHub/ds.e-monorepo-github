import React, { useState } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
  options?: SelectOption[];
  label?: string;
}

const Select: React.FC<SelectProps> = ({
  options = [],
  label = 'Please select an option...',
  onOptionSelected: handler,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOptionSelected = (option: SelectOption, optionIndex: number) => {
    setIsOpen(!isOpen);
    if (handler) {
      handler(option, optionIndex);
    }
  };

  const onLableClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dse-select">
      <button className="dse-select__label" onClick={() => onLableClick()}>
        <span>{label}</span>
        <svg
          width="1rem"
          height="1rem"
          data-slot="icon"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {isOpen ? (
        <ul className="dse-select__overlay">
          {options.map((option, optionIndex) => {
            return (
              <li
                className="dse-select__option"
                onClick={() => onOptionSelected(option, optionIndex)}
                key={option.value}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
