import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

import './assets/index.css'
import { Home } from './pages/homePage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Home />
);


reportWebVitals();
