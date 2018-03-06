import React from 'react';
import {Link,browserHistory} from 'react-router';
import TimeSlot from './TimeSlot';
import PropTypes from 'prop-types';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const value = this.props.route;
    console.log("route in Home: " + value);
    return (
      <div>
        {value == "" ?(
          <div>
        <h1 style={{marginTop:130+'px'}}>Choose Your Route</h1>
        <div className="address" style={{border:'none'}}>
          {/* <Link to = "/TimeSlot/UCSD => VOR" ><button><span>UCSD => VOR</span></button> */}
          {/* <Link to = "/TimeSlot/VOR => UCSD" ><button><span>VOR => UCSD</span></button> */}
          <button><span onClick={()=> {this.props.changeRoute("UCSD => VOR")}}>UCSD => VOR</span></button>
          <button><span onClick={()=> {this.props.changeRoute("VOR => UCSD")}}>VOR => UCSD</span></button>
        </div></div>):(<TimeSlot route={value} selectedTime={this.props.selectedTime} resetRoute={this.props.resetRoute} changeTime={this.props.changeTime} resetTime={this.props.resetTime} resetEverything={this.props.resetEverything}/>)}
      </div>
    );
  }
}

Home.propTypes = {
   // pageName: PropTypes.string,
   // resetEverything: PropTypes.func
};

export default Home;
