import React from 'react';
import { createRoot } from 'react-dom/client';

import { Button } from '@ds.e/react';
import '@ds.e/scss/lib/Button.css';

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);
root.render(
  <div style={{ padding: '40px' }}>
    <Button label="Example Button" />
  </div>,
);
