import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This is the line that imports all of your CSS styles
import './assets/styles.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);