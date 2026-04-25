import React from 'react';
import { createRoot } from 'react-dom/client';

import { Button, Color } from '@ds.e/react';
import '@ds.e/scss/lib/Button.css';
import '@ds.e/scss/lib/Utilities.css';

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);
root.render(
  <div style={{ padding: '40px' }}>
    <Button label="Example Button" />
    <div style={{ padding: '20px' }}>
      <Color hexCode="#FF00FF" width="lg" height="lg" />
    </div>
  </div>,
);
