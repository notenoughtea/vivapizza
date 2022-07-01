import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import axios from 'axios';
import App from './App';
import { store } from './store/store'
import { Provider } from 'react-redux'

axios.defaults.baseURL = 'http://127.0.0.1:3333'; // ! аналогично в client/constants.js, server/bin/www.js, client/store/cardSlice.js

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
root.render(
  <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
  </React.StrictMode>,
);
