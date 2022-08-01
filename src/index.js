import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={createStore(reducer)}>
      <App />
    </Provider>
  </StrictMode>
);
