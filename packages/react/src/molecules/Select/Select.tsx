import React, { useEffect, useRef, useState } from 'react';

import Text from '../../atoms/Text/Text';
import Color from '../../atoms/Color/Color';

interface SelectOption {
  value: string;
  label: string;
  'hex-code'?: string;
}

interface RenderOptionProps {
  isSelected: boolean;
  selectOption: SelectOption;
  getOptionRecommendedProps: (overrideProps?: Object) => Object;
}

interface SelectProps {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
  options?: SelectOption[];
  label?: string;
  renderOption?: (props: RenderOptionProps) => React.ReactNode;
}

const Select: React.FC<SelectProps> = ({
  options = [],
  label = 'Please select an option...',
  onOptionSelected: handler,
  renderOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  const labelRef = useRef<HTMLButtonElement>(null);
  const [overlayTop, setOverlayTop] = useState<number>(0);

  const onOptionSelected = (option: SelectOption, optionIndex: number) => {
    setIsOpen(!isOpen);
    if (handler) {
      handler(option, optionIndex);
    }
    setSelectedIndex(optionIndex);
    setIsOpen(false);
  };

  const onLableClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
  }, [labelRef.current?.offsetHeight]);

  let selctedOption = null;
  if (selectedIndex !== null) {
    selctedOption = options[selectedIndex];
  }

  return (
    <div className="dse-select">
      <button
        aria-controls="dse-select-list"
        aria-haspopup={true}
        aria-expanded={isOpen ? 'true' : undefined}
        ref={labelRef}
        className="dse-select__label"
        onClick={() => onLableClick()}
      >
        <Text>{selctedOption === null ? label : selctedOption.label}</Text>
        <svg
          className={`dse-select__caret ${isOpen ? 'dse-select__caret--open' : 'dse-select__caret--closed'}`}
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
        <ul role="menu" id="dse-select-list" style={{ top: overlayTop }} className="dse-select__overlay">
          {options.map((option, optionIndex) => {
            const isSelected = optionIndex === selectedIndex;
            const renderOptionProps = {
              isSelected,
              selectOption: option,
              getOptionRecommendedProps: (overrideProps = {}) => {
                return {
                  className: `dse-select__option
                                ${isSelected ? 'dse-select__option--selected' : ''}
                            `,
                  key: option.value,
                  onClick: () => onOptionSelected(option, optionIndex),
                  ...overrideProps,
                };
              },
            };
            if (renderOption) {
              return renderOption(renderOptionProps);
            }
            return (
              <li
                className={`dse-select__option ${isSelected ? 'dse-select__option--selected' : ''}`}
                onClick={() => onOptionSelected(option, optionIndex)}
                key={option.value}
              >
                <div style={{ display: 'flex' }}>
                  <Color hexCode={option['hex-code']} width="lg" height="lg" />
                  <div style={{ padding: '10px' }}>
                    <Text>{option.label}</Text>
                  </div>
                </div>
                {isSelected && (
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
