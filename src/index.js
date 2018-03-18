import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import route from './components/Route';
import './css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store = {store} >
        <Router history={browserHistory} routes={route}/>
    </Provider>,
    document.getElementById('app')
);
