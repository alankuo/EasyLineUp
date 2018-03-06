import React from 'react';
import {Link,browserHistory} from 'react-router';
import TimeSlot from './TimeSlot';

class Home extends React.Component{
  constructor(props){
    super(props);

    // Initial state
    this.state = {
      route:"",
      level:1
    };

    // Bind all functions so they can refer to "this" correctly
    this.changeRoute = this.changeRoute.bind(this);
    this.resetRoute = this.resetRoute.bind(this);
    this.resetEverything = this.resetEverything.bind(this);
  }

  changeRoute(value){
    this.setState({route:value});
  }

  resetRoute(){
    this.setState({route:""});
  }

  resetEverything(){
    this.setState({route:""});
    console.log("home reset");
  }

  render(){
    const value = this.state.route;
    // console.log("value: " + value);
    return (
      <div>
        {value == "" ?(
          <div>
        <h1 style={{marginTop:130+'px'}}>Choose Your Route</h1>
        <div className="address" style={{border:'none'}}>
          {/* <Link to = "/TimeSlot/UCSD => VOR" ><button><span>UCSD => VOR</span></button> */}
          {/* <Link to = "/TimeSlot/VOR => UCSD" ><button><span>VOR => UCSD</span></button> */}
          <button><span onClick={()=> {this.changeRoute("UCSD => VOR")}}>UCSD => VOR</span></button>
          <button><span onClick={()=> {this.changeRoute("VOR => UCSD")}}>VOR => UCSD</span></button>
        </div></div>):(<TimeSlot route={value} resetRoute={this.resetRoute} resetEverything={this.resetEverything}/>)}
      </div>
    );
  }
}

export default Home;
