import React from 'react';
import { createRoot } from 'react-dom/client';

import { Button, Color, Text, Margin, Select } from '@ds.e/react';
import '@ds.e/scss/lib/Button.css';
import '@ds.e/scss/lib/Margin.css';
import '@ds.e/scss/lib/Select.css';
import '@ds.e/scss/lib/Utilities.css';
import '@ds.e/scss/lib/global.css';

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Root element not found');

const options = [
  {
    label: 'Strict Black',
    value: 'strict-black',
  },
  {
    label: 'Heavenly Green',
    value: 'heavenly-green',
  },
  {
    label: 'Sweet Pink',
    value: 'pink',
  },
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
      <Margin left space="xl">
        <Text fontSize="xs">This is some Text with Margin</Text>
      </Margin>
    </div>
    <Select options={options} />
  </div>,
);
