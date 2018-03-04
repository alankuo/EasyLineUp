import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import {Link,browserHistory} from 'react-router';

class Status extends React.Component {
    constructor(props){
        super(props);
    }

    Countdown() {
		var currDate = new Date();
		var now = currDate.getTime();
		var month = currDate.getMonth()+1;
		var str = "2018/"+month+"/"+currDate.getDate()+ " "+this.props.params.countDown;
		var endDate = new Date(str);
		var end = endDate.getTime();
		var diff = end - now;

		var hour, min, sec;
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
        console.log(sec);
		document.getElementById("timeleft").innerHTML = hour + ": "+ min + ": " + sec;
		this.clock = setTimeout(this.Countdown.bind(this),1000);
    }

    componentWillUnmount() {
        clearTimeout(this.clock);
    }
    componentDidMount() {
        this.Countdown();
    }

    render() {
        var link = `/Confirmation/${this.props.params.countDown}`;
        return (
            <div>
                <Header />
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
                                    <Link to = '/chat'><button onclick="window.location.href='chat.html'"><span>Chatting Room</span></button></Link>
                                </div>
                                <div>
                                    <Link to ={link}><span>Cancel</span></Link>
                                </div>
                            </div>
                        </div>
                    <Footer />
                </div>
            </div>
        );
    }
}
export default Status;