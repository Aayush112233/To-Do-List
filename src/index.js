import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { Home } from './pages/homePage';
import './assets/index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Home />
);


reportWebVitals();
