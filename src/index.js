import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './main.css';
import store from './store';
import App from './modules/App';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
