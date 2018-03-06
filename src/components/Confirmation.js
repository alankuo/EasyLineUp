import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import {Link,browserHistory} from 'react-router';
import Status from './Status';

class Confirmation extends React.Component {


    constructor(props){
        super(props);

        this.state = {
          time: this.props.time,
          queueUp: false
        };

        this.setQueueUp = this.setQueueUp.bind(this);
    }

    setQueueUp(){
      this.setState({queueUp:true});
    }

    render() {
        let divStyle = {
            padding:"40px 0 50px 0"
        };

        let value = this.state.queueUp;
        return (
            <div>
              {value==false?
                (<div className="container">
                    <div className="time">
                        <div className="header">
                            <h1>You Selected:</h1>
                        </div>
                        <div className="address">
                            <div className = "select" style={divStyle}>
                                <span style={{fontSize:55+'px',color:"red"}}>{this.props.time}</span>
                            </div>
                            <a onClick={this.props.resetTime} className="btn">Back</a>
                            <a onClick={() => {this.setQueueUp();}} className="btn">Line-Up</a>
                        </div>
                    </div>
                </div>):<Status time={this.state.time} resetEverything={this.props.resetEverything}/>}
            </div>
        );
    }
}
export default Confirmation;
