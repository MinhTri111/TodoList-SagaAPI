import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import './assets/scss/index.scss';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
);

reportWebVitals();
