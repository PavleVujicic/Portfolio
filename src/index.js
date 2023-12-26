import React from 'react';
import ReactDOM from 'react-dom/client';
import './fonts/fonts.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);