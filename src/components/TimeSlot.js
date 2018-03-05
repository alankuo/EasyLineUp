import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import {Link,browserHistory} from 'react-router';
class TimeSlot extends React.Component {

    constructor(props){
        super(props);
        this.schedule = "/Confirmation/hello";
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
                items.push(<li><Link to={link}><button type="button" className="btn btn-primary">{time}</button></Link></li>);
            } else {
                time = `${hour}:${min}`;
                link = `/confirmation/${time}`;
                items.push(<li><Link to={link}><button type="button" className="btn btn-primary">{time}</button></Link></li>);
            }

            min += 15;
        }
        return items;
    }


    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="time">
                        <div className="header">
                            <h1>{this.props.params.name}</h1>
                        </div>
                        <div className="address">
                        <ul className="schedule">
                            {/* <li><Link to="a"><button type="button" class="btn btn-info">7:00</button></Link></li>
                            <li><button type="button" class="btn btn-info">7:15</button></li>
                            <li><button type="button" class="btn btn-info">7:30</button></li>
                            <li><button type="button" class="btn btn-info">7:45</button></li>
                            <li><button type="button" class="btn btn-info">8:00</button></li>
                            <li><button type="button" class="btn btn-info">8:15</button></li>
                            <li><button type="button" class="btn btn-info">8:30</button></li> */}
                            {this.renderTime()}
                        </ul>
                            <Link to = "/" className="btn">Back</Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default TimeSlot;
