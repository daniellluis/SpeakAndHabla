import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Importa createRoot desde react-dom/client
import App from './App';

const container = document.getElementById('root'); // Obtén la referencia al contenedor
const root = createRoot(container); // Crea una raíz con createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
