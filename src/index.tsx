import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterIndex from '../src/Config/Router/Router'
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <RouterIndex />
  </BrowserRouter>
</React.StrictMode>
);
