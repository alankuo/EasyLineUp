import React from 'react';
import {Link} from 'react-router';

class Login extends React.Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //       username: 'alan',
  //       password: 'kuo'
  //   };
  // }

  render(){
    // document.title = 'Login - EasyLineUp';
    return (
      <div>
        <h1>Welcome to EasyLineUp!!</h1>
        <Link to="about">Learn more</Link>
      </div>
    );
  }
}

export default Login;
