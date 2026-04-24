import React from 'react';
import { createRoot } from 'react-dom/client';

import { Button, Color } from '@ds.e/react';
import '@ds.e/scss/lib/Button.css';

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);
root.render(
  <div style={{ padding: '40px' }}>
    <Button label="Example Button" />
    <Color hexCode="#000" width="1rem" height="1rem" />
  </div>,
);
