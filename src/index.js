import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Theme } from 'themeor';
import theme from './theme.json';

ReactDOM.render(
  <Theme config={theme}>
    <App />
  </Theme>,
  document.getElementById('root')
);
