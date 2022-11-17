import React from 'react';
import ReactDOM from 'react-dom/client';
// Aniadir Bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css'
//!importante: los estilos propios van debajo del la importancion de bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css';
import './App.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <AppRoutingFinal/> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
