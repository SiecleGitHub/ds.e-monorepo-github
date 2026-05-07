import React from 'react';
import Select from './Select';

// css

const options = [
  {
    label: 'Strict Black',
    value: 'strict-black',
    'hex-code': '#000000',
  },
  {
    label: 'Heavenly Green',
    value: 'heavenly-green',
    'hex-code': '#00FF00',
  },
  {
    label: 'Sweet Pink',
    value: 'pink',
    'hex-code': '#FF00FF',
  },
];

export default {
  title: 'Molecules|Select',
};

export const Common = () => <Select options={options} />;

export const RenderOption = () => (
  <Select
    options={options}
    renderOption={({ getOptionRecommendedProps, selectOption, isSelected }) => (
      <span {...getOptionRecommendedProps()}>
        {selectOption.label} {isSelected ? 'SELECTED !' : ''}
      </span>
    )}
  />
);

export const CustomLabel = () => <Select label="Select a color" options={options} />;
