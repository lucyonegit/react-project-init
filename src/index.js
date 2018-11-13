import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainRouter from "./router/router"
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<MainRouter />, document.getElementById('root'));
serviceWorker.unregister();