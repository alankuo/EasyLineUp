import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import {Link,browserHistory} from 'react-router';
import Confirmation from './Confirmation';
import TimeButton from './TimeButton';

class TimeSlot extends React.Component {

    constructor(props){
        super(props);

        this.state = {
          route: this.props.route
        };

        this.renderTime = this.renderTime.bind(this);
    }

    renderTime() {
        let d = new Date();
        let hour = d.getHours();
        let currMin = d.getMinutes();
        let min;
        if (currMin >=0 && currMin<15) {
            min = 15;
        } else if (currMin >= 15 && currMin < 30) {
            min = 30;
        } else if (currMin >= 30 && currMin < 45) {
            min = 45;
        } else {
            min = 0;
        }
        let items = [];
        for (let i = 0, length = 7; i < length; i++)
        {
            // if (items[i].nodeType != 1) {
            //    continue;
            // }
            let time;
            let link;
            if (min >= 60 || min == 0) {
                hour = hour + 1;
                min = 0;
                time = `${hour}:00`;
                link = `/confirmation/${time}`;
                // items.push(<li><Link to={link}><button type="button" className="btn btn-primary">{time}</button></Link></li>);
                items.push(<li><TimeButton time={time} changeTime={this.props.changeTime}/></li>);
            } else {
                time = `${hour}:${min}`;
                link = `/confirmation/${time}`;
                // items.push(<li><Link to={link}><button type="button" className="btn btn-primary">{time}</button></Link></li>);
                items.push(<li><TimeButton time={time} changeTime={this.props.changeTime}/></li>);
            }

            min += 15;
        }
        return items;
    }


    render() {
      // console.log("TimeSlot route: " + this.state.route);
      const value = this.props.selectedTime;
        return (
            <div>
              {value == '' ?
              (<div className="container">
                    <div className="time">
                        <div className="header">
                            <h1>{this.state.route}</h1>
                        </div>
                        <div className="address">
                        <ul className="schedule">
                            {this.renderTime()}
                        </ul>
                            <a onClick={()=> {this.props.resetRoute();}} className="btn">Back</a>
                        </div>
                    </div>
                </div>):<Confirmation time={value} resetTime={this.props.resetTime} resetEverything={this.props.resetEverything}/>}
            </div>
        );
    }
}
export default TimeSlot;
