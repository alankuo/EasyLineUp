import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app/App';
import Login from './app/components/Login';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="about" component={Login}/>
  </Route>
);
