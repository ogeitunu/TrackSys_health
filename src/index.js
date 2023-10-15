import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Grommet } from 'grommet';

const theme = {
  global: {
    font:{
      family: "Roboto",
      size:"18px"
    },
  },
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Grommet theme={theme}>
      <App />
    </Grommet>
  </React.StrictMode>
);
