import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Chat from './Chat';
import App from './App';
// import Driver from './Driver';

export default (
  <Route path='/'>

    <IndexRoute component={App} />
    <Route path="about" component={App}/>
    {/* <Route path="timeslot" component={App}/> */}
    <Route path="chat" component={Chat}/>
    {/* <Route path="driver" component={Driver}/> */}

  </Route>
)
