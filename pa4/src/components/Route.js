import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import Login from './Login';
import Register from './Register';
import Reset from './Reset';
import Profile from './Profile';
export default(
  <Route path='/'>
    <IndexRoute component={App} />
    <Route path="about" component={App}/>
    <Route path="login" component={Login}/>
    <Route path="register" component={Register}/>
    <Route path="reset" component={Reset}/>
    <Route path="profile" component={Profile}/>
  </Route>
)
