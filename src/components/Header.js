import React from 'react';
import logo from '../img/logo.png';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      homeVal:"",
      profileVal:"",
      chatVal:"",
      curr: this.props.pageName
    };

    // Bind all functions so they can refer to "this" correctly
    this.updateValue = this.updateValue.bind(this);
  }

  componentWillMount(){
    const value = this.props.pageName;
    if(value==""){
      this.setState({homeVal:"active"});
    }
    else if(value=="profile"){
      this.setState({profileVal:"active"});
    }
    else if(value=="chatVal"){
      this.setState({chatVal:"active"});
    }
  }

  updateValue(value) {
  }

  render(){
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand logo-nav" href="#"><img src={logo}/></a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className={this.state.homeVal}><Link to="/" onClick={this.props.resetEverything}>Home</Link></li>
              <li className={this.state.profileVal}><Link to="profile" onClick={this.props.resetEverything}>Profile</Link></li>
              <li className={this.state.chatVal}><Link to="chat" onClick={this.props.resetEverything}>Chatting Room</Link></li>
              <li><Link to="login" onClick={this.props.resetEverything}>Logout</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
   pageName: PropTypes.string,
   resetEverything: PropTypes.func
};

export default Header;
