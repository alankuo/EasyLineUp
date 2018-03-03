import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
export default(
  <Route path='/' component={App}>
    <IndexRoute component={App} />
    <Route path="about" component={App}/>
    <Route path="timeslot" component={App}/>
  </Route>
)
