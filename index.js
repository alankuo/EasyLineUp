import 'babel-polyfill';
import React from 'react';
import {ReactDOM, render} from 'react-dom';
import routes from './routes';
import {Router, browserHistory} from 'react-router';
import './styles/style.css';
//import './styles/bootstrap.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
