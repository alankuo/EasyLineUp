import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import TimeSlot from './TimeSlot';
import Confirmation from './Confirmation';
import Status from './Status';
import Home from './Home';

export default(
  <Route path='/'>
    <IndexRoute component={App} />
    <Route path="about" component={App}/>
    <Route path="timeslot/:name" component={TimeSlot}/>
    <Route path="timeslot" component={TimeSlot}/>
    <Route path="home" component={Home}/>
    <Route path="confirmation/:time" component={Confirmation}/>
    <Route path="status/:countDown" component={Status}/>
  </Route>
)
