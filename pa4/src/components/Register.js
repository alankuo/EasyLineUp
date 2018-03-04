
import React from 'react';
import {Link} from 'react-router';

class Register extends React.Component{

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
          routeAddress: "/login"
        };

        // Bind all functions so they can refer to "this" correctly
        this.registerAccount = this.registerAccount.bind(this);
    }

  registerAccount(e){
    const access_code = document.getElementById("access_code").value;
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const username = document.getElementById("username").value;
    const password_1 = document.getElementById("password_1").value;
    const password_2 = document.getElementById("password_2").value;
    if(access_code==""||first_name==""||last_name==""||username==""||password_1==""||password_2==""){
      alert("Please fill in all required information!");
      e.preventDefault();
    }
    else if(password_1.length<8){
      alert("Password is too short! It has to be at least 8 characters!");
      e.preventDefault();
    }
    else if(password_1!=password_2){
      alert("Passwords do not match!");
      e.preventDefault();
    }
    else{
      alert ("The account for " + username + " has been successfully created! You can log in to Easy LineUp Now!");
    }
  }

  render(){
    return (
      <div className="container">
        <div className="header" style={{width:350+"px", marginTop:0}}>
          <h2>Register An Account</h2>
        </div>
        <form method="post">
          <div className="input-group">
            <label>Access Code*</label>
            <input type="text" name="accesscode" id="access_code"></input>
          </div>
          <div className="input-group">
            <label>First Name*</label>
            <input type="text" name="first_name" id="first_name" placeholder=""></input>
          </div>
          <div className="input-group">
            <label>Last Name*</label>
            <input type="text" name="last_name" id="last_name" placeholder=""></input>
          </div>
          <div className="input-group">
            <label>Username*</label>
            <input type="text" name="username" id="username" placeholder=""></input>
          </div>
          <div className="input-group">
            <label>Password*</label>
            <input type="password" name="password_1" id="password_1" placeholder="xxxxxxxx"></input>
          </div>
          <div className="input-group">
            <label>Confirm Password*</label>
            <input type="password" name="password_2" id="password_2" placeholder="xxxxxxxx"></input>
          </div>
          <div className="input-group">
            <label>Phone</label>
            <input type="number" name="phone" placeholder="(000)-000-0000"></input>
          </div>
          <div className="input-group">
            <label>Email*</label>
            <input type="email" name="email" placeholder="name@example.com"></input>
          </div>
          <p>By submitting this information, you indicate that you agree to EasyLineUp's <strong>Terms of Service</strong> and have read and understood our <strong>Privacy Policy</strong>.</p>
          <div className="input-group">
            <Link to={this.state.routeAddress} type="submit" className="btn" name="register_btn" onClick={this.registerAccount}>Register</Link>
          </div>
          <p>
            Already a Member? <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>

    );
  }
}


export default Register;
