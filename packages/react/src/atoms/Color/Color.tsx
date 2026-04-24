import React from 'react';

interface ColorProps {
  hexCode: string;
  width: string;
  height: string;
}

const Color: React.FunctionComponent<ColorProps> = ({ hexCode, width, height }) => {
  return <div style={{ backgroundColor: hexCode, width, height }} />;
};

export default Color;
