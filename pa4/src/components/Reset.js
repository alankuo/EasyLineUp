
import React from 'react';
import {Link} from 'react-router';

class Reset extends React.Component{
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
      routeAddress: "/reset"
    };

    // Bind all functions so they can refer to "this" correctly
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(e){
    const email = document.getElementById("email").value;
    if(!email.includes("@")||!email.includes(".com")){
      alert("Please enter a valid email address!");
      e.preventDefault();
    }
    else{
      alert("A password reset link has been sent to " + email);
    }
  }

  render(){
    return (
      <div>
        <h1 className="welcome-msg">Welcome to <span className="primary">EasyLineUp!!</span></h1>
        <div className="header" style={{width:350+'px'}}>
          <h2>Reset Your Password</h2>
        </div>
        <form>
          <div className="input-group">
            <label>Your Email</label>
            <input type="email" id="email" placeholder="name@example.com"></input>
          </div>
          <div className="input-group">
            <Link to="/login" className="btn" style={{float:'left', marginLeft:5+'px'}}>Back</Link>
            <Link to="/login" className="btn" name="password_btn" id="submitBtn" onClick={this.sendEmail} style={{float:'right', marginLeft:100+'px'}}>Forget Password</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Reset;
