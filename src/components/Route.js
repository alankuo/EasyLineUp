import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Chat from './Chat';
import App from './App';
import Driver from './Driver';
import Login from './Login';
import Register from './Register';
import Reset from './Reset';
import Profile from './Profile';
import TimeSlot from './TimeSlot';
import Confirmation from './Confirmation';
import Status from './Status';
import Home from './Home';

export default(
  <Route path='/'>
    <IndexRoute component={App} />
    <Route path="about" component={App}/>
    <Route path="login" component={Login}/>
    <Route path="register" component={Register}/>
    <Route path="reset" component={Reset}/>
    <Route path="profile" component={Profile}/>
    <Route path="timeslot/:name" component={TimeSlot}/>
    <Route path="timeslot" component={TimeSlot}/>
    <Route path="home" component={Home}/>
    <Route path="confirmation/:time" component={Confirmation}/>
    <Route path="status/:countDown" component={Status}/>
    <Route path="chat" component={Chat}/>
    <Route path="driver" component={Driver}/>
  </Route>
)
