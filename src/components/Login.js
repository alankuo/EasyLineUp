
import React from 'react';
import App from './App';
import {Link,Redirect} from 'react-router';
import data from '../account';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction} from '../actions';
import Route from './Route';

class Login extends React.Component{

  // var  = document.getElementById("password");
  // input.addEventListener("keypress", function(event) {
  //     if (event.which === 13) {
  // 			document.getElementById("submitBtn").click();
  //     }
  // });
  constructor() {
    super();

    // Initial state
    this.state = {
      routeAddress: "/"
    };

    // Bind all functions so they can refer to "this" correctly
    this.validateLogin = this.validateLogin.bind(this);

    // console.log("DATA: " + JSON.stringify(data));
    // console.log(data.length);
  }

  validateLogin(e){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    e.preventDefault();
    this.props.login(username,password);
  }

  render(){
    if(this.props.verification === undefined){

    }
    else if(!this.props.verification){
      alert("username and password do not match!");

    }
    else {
      // alert("successfully log in");
      console.log('log in');
      this.props.history.push('/');
    }
    return (
      <div>
        <h1 className="welcome-msg">Welcome to <span className="primary">EasyLineUp!!</span></h1>
        <div className="container">
          <div className="time">
            <div className="header">
              <h2>LOG IN</h2>
            </div>

            <form id="form_id" method="post" name="myform">
              <div>
                <label>Who Are You:</label>
                <input type="radio" id="passenger" name="identity" value="passenger"></input>
                <label>Student</label>

                <input type="radio" id="driver" name="identity" value="driver"></input>
                <label>Driver</label>
              </div>

              <div className="input-group">
                <label>Username</label>
                <input type="text" name="username" id="username" ></input>
              </div>

              <div className="input-group">
                <label>Password</label>
                <input type="password" name="password" id="password" ></input>
              </div>

              <div className="input-group">
                <Link to={this.state.routeAddress} type="submit" className="btn" onClick={this.validateLogin} id="submitBtn" name="login_btn">LOG IN</Link>
              </div>
              <p>
                Not yet a member? <Link to="/register">Sign up</Link>
              </p>
              <p>
                Forgot your password? <Link to="/reset">Reset Password</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// export default Login;
function mapStateToProps(state) {
  console.log(state);
  return {
    verification: state.login.verification,
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({login: loginAction}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);
