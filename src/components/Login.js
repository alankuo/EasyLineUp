
import React from 'react';
import {Link} from 'react-router';
import data from '../account.js';

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
    let verification = false;
    let veriUser = "";
    let veriPassword = "";
    for(let i=0; i<data.length;i++){
      veriUser = data[i].name;
      veriPassword = data[i].password;
      if(veriUser == username && veriPassword == password){
        verification = true;
        alert ("Login successfully");
        this.setState({routeAddress:"/"});
      }
    }
    if(!verification){
      alert("username and password do not match!");
      e.preventDefault();
    }
  }

  render(){
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

export default Login;
