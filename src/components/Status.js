import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

class Status extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.Countdown();
    }

    componentWillUnmount() {
        clearTimeout(this.clock);
    }

    Countdown() {
      let currDate = new Date();
      let now = currDate.getTime();
      let month = currDate.getMonth()+1;
      let str = "2018/"+month+"/"+currDate.getDate()+ " "+this.props.time;
      let endDate = new Date(str);
      let end = endDate.getTime();
      let diff = end - now;

      let hour, min, sec;
      if (diff >= 0) {
        hour = Math.floor(diff/1000/60/60%24);
        min = Math.floor(diff/1000/60%60);
        sec = Math.floor(diff/1000%60);
      }
      if (min <10) {
        min = "0"+min;
      }
      if (sec < 10) {
        sec = "0"+sec;
      }
      // console.log(sec);
      document.getElementById("timeleft").innerHTML = hour + ": "+ min + ": " + sec;
      this.clock = setTimeout(this.Countdown.bind(this),1000);
    }

    render() {
      // let link = `/Confirmation/${this.props.time}`;
      return (
        <div>
          <div className="container">
            <div className="time">
              <div className="header">
                <h1>You Are In the Queue!</h1>
              </div>
              <div className="address">
                <p style={{fontWeight:"bold", fontSize:20+"px"}}>Time remaining until shuttle time:</p>
                <div className="countdown">
                  <h1 id="timeleft">00</h1>
                </div>
                <div className="info">
                  <h2>You are<strong> #3 </strong>of the Queue.</h2>
                </div>
                <div>
                  <Link to = "/chat"><button><span>Chatting Room</span></button></Link>
                </div>
                <div>
                  <a onClick={this.props.resetEverything} className="cancelLink btn"><span>Cancel</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

Status.propTypes = {
   time: PropTypes.string,
   resetEverything: PropTypes.func
 };

export default Status;
