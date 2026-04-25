import React from 'react';
import { FontSize } from '@ds.e/foundation';

export interface TextProps {
  children: React.ReactNode;
  fontSize?: keyof typeof FontSize;
}

const Text: React.FunctionComponent<TextProps> = ({ children, fontSize = 'md' }) => {
  const className = `dse-text dse-font-size-${fontSize}`;
  return <span className={className}>{children}</span>;
};

export default Text;
