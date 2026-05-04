import React, { createRef, KeyboardEventHandler, useEffect, useRef, useState } from 'react';

import Text from '../../atoms/Text/Text';
import Color from '../../atoms/Color/Color';

export const KEY_CODES = {
  ENTER: 13,
  SPACE: 32,
  DOWN_ARROW: 40,
  ESC: 27,
  UP_ARROW: 38,
};

interface SelectOption {
  value: string;
  label: string;
  'hex-code'?: string;
}

interface RenderOptionProps {
  ref?: React.RefObject<HTMLLIElement>;
  isSelected: boolean;
  selectOption: SelectOption;
  getOptionRecommendedProps: (
    overrideProps?: React.HTMLAttributes<HTMLLIElement>,
  ) => React.HTMLAttributes<HTMLLIElement>;
}

interface SelectProps {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
  options?: SelectOption[];
  label?: string;
  renderOption?: (props: RenderOptionProps) => React.ReactNode;
}

const getPreviousOptionIndex = (currentIndex: number | null, options: Array<SelectOption>) => {
  if (currentIndex === null) {
    return 0;
  }

  if (currentIndex === 0) {
    return options.length - 1;
  }

  return currentIndex - 1;
};

const getNextOptionIndex = (currentIndex: number | null, options: Array<SelectOption>) => {
  if (currentIndex === null) {
    return 0;
  }

  if (currentIndex === options.length - 1) {
    return 0;
  }

  return currentIndex + 1;
};

const Select: React.FC<SelectProps> = ({
  options = [],
  label = 'Please select an option...',
  onOptionSelected: handler,
  renderOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<null | number>(null);
  const labelRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<React.RefObject<HTMLLIElement>[]>([]);
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

  useEffect(() => {
    optionRefs.current = options.map((_, index) => optionRefs.current[index] ?? createRef<HTMLLIElement>());
  }, [options]);

  let selctedOption = null;
  if (selectedIndex !== null) {
    selctedOption = options[selectedIndex];
  }

  const highlightOption = (optionIndex: number | null) => {
    setHighlightedIndex(optionIndex);
  };

  const onButtonKeyDown: KeyboardEventHandler = (event) => {
    event.preventDefault();

    if ([KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN_ARROW].includes(event.keyCode)) {
      setIsOpen(true);

      // set focus on the list item
      highlightOption(0);
    }
  };

  useEffect(() => {
    if (highlightedIndex !== null && isOpen) {
      const ref = optionRefs.current[highlightedIndex];

      if (ref && ref.current) {
        ref.current.focus();
      }
    }
  }, [isOpen, highlightedIndex]);

  const onOptionKeyDown: KeyboardEventHandler = (event) => {
    if (event.keyCode === KEY_CODES.ESC) {
      setIsOpen(false);

      return;
    }

    if (event.keyCode === KEY_CODES.DOWN_ARROW) {
      highlightOption(getNextOptionIndex(highlightedIndex, options));
    }

    if (event.keyCode === KEY_CODES.UP_ARROW) {
      highlightOption(getPreviousOptionIndex(highlightedIndex, options));
    }

    if (event.keyCode === KEY_CODES.ENTER) {
      onOptionSelected(options[highlightedIndex!], highlightedIndex!);
    }
  };

  //console.log(optionRefs.current);

  return (
    <div className="dse-select">
      <button
        onKeyDown={onButtonKeyDown}
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
            const isHighlighted = highlightedIndex === optionIndex;

            const ref = optionRefs.current[optionIndex];

            const renderOptionProps = {
              ref,
              selectOption: option,
              isSelected,
              getOptionRecommendedProps: (overrideProps = {}) => {
                return {
                  ref,
                  role: 'menuitemradio',
                  'aria-label': option.label,
                  'aria-checked': isSelected ? true : undefined,
                  onKeyDown: onOptionKeyDown,
                  tabIndex: isHighlighted ? -1 : 0,
                  onMouseEnter: () => highlightOption(optionIndex),
                  onMouseLeave: () => highlightOption(null),
                  className: `dse-select__option
                                ${isSelected ? 'dse-select__option--selected' : ''}
                                ${isHighlighted ? 'dse-select__option--highlighted' : ''}
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
              <li {...renderOptionProps.getOptionRecommendedProps()}>
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
