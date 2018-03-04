import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';

import App from './componenets/App';
import route from './componenets/Route';
import './css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
    <Router history={browserHistory} routes={route}/>,
    document.getElementById('app')
);