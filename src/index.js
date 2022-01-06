import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyling from './styled';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyling />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();