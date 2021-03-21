import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { FavoriteContextProvider } from  './store/favorites-context'

ReactDOM.render(
    <FavoriteContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavoriteContextProvider>,
    document.getElementById('root')
);


