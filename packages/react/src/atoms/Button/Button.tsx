import React from 'react';

interface ButtonProps {
  lable: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({ lable }) => {
  return <button>{lable}</button>;
};

export default Button;
