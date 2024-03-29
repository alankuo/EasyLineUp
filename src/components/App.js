import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction, logoutAction } from '../actions';


class App extends React.Component{
  constructor(props){
    super(props);

    // Initial state
    this.state = {
      route:"",
      selectedTime: ''
    };

    // Bind all functions so they can refer to "this" correctly
    this.changeRoute = this.changeRoute.bind(this);
    this.resetRoute = this.resetRoute.bind(this);
    this.changeTime = this.changeTime.bind(this);
    this.resetTime = this.resetTime.bind(this);
    this.resetEverything = this.resetEverything.bind(this);
  }


  changeRoute(value){
    this.setState({route:value});
  }

  resetRoute(){
    this.setState({route:""});
  }

  changeTime(value){
    this.setState({selectedTime:value});
    // console.log("time selected: " + value);
  }

  resetTime(value){
    this.setState({selectedTime:''});
  }

  resetEverything(){
    this.props.logout();
    // this.setState({route:"",selectedTime:''});
    // console.log("home reset");
  }

  render(){
    if(this.props.verification !== true && localStorage["username"]==undefined){
    // if(localStorage["username"]==undefined){
      window.location = '/login';
      return;
    }
    return (
      <div>
        <Header pageName="" resetEverything={this.resetEverything}/>
        <Home route={this.state.route} selectedTime={this.state.selectedTime} changeRoute={this.changeRoute} resetRoute={this.resetRoute} changeTime={this.changeTime} resetTime={this.resetTime} resetEverything={this.resetEverything} />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    verification: state.login.verification,
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({login: loginAction, logout: logoutAction}, dispatch);
}

export default connect(mapStateToProps)(App);
