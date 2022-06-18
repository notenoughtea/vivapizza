import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:3333"; // ! аналогично в client/constants.js, server/bin/www.js, client/store/cardSlice.js

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
