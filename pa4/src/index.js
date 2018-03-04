import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';

import route from './components/Route';

ReactDOM.render(
    <Router history={browserHistory} routes={route}/>,
    document.getElementById('app')
);