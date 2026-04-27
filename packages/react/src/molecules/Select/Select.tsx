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
    <div>
      <button onClick={() => onLableClick()}>{label}</button>
      {isOpen ? (
        <ul>
          {options.map((option, optionIndex) => {
            return (
              <li onClick={() => onOptionSelected(option, optionIndex)} key={option.value}>
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
