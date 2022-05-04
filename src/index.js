// 1) Tener la variable react en scope
import React from 'react';

// 2) Tener la variable reactDOM en scope
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 4) Hacer render de la App en el DOM
root.render(<App />);
