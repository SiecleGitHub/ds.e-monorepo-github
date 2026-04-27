import React from 'react';
import { createRoot } from 'react-dom/client';

import { Button, Color, Text, Margin, Select } from '@ds.e/react';
import '@ds.e/scss/lib/Button.css';
import '@ds.e/scss/lib/Margin.css';
import '@ds.e/scss/lib/Utilities.css';

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Root element not found');

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];
const root = createRoot(rootElement);
root.render(
  <div style={{ padding: '40px' }}>
    <Button label="Example Button" />
    <div style={{ padding: '20px' }}>
      <Color hexCode="#FF00FF" width="lg" height="lg" />
    </div>
    <div style={{ padding: '20px', display: 'flex' }}>
      <Color hexCode="#0000FF" width="lg" height="lg" />
      <Text fontSize="lg">This is some Text</Text>
    </div>
    <Margin left space="xl">
      <Text fontSize="xs">This is some Text with Margin</Text>
    </Margin>
    <Select options={options} />
  </div>,
);
