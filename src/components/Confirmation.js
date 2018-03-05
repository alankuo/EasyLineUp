import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import {Link,browserHistory} from 'react-router';

class Confirmation extends React.Component {


    constructor(props){
        super(props);
    }

    render() {
        let divStyle = {
            padding:"40px 0 50px 0"
        };

        let countdown = `/Status/${this.props.params.time}`;
        console.log(countdown);
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="time">
                        <div className="header">
                            <h1>You Selected:</h1>
                        </div>
                        <div className="address">
                            <div className = "select" style={divStyle}>
                                <span style={{fontSize:55+'px',color:"red"}}>{this.props.params.time}</span>
                            </div>
                            <Link to = "Timeslot" className="btn">Back</Link>
                            <Link to = {countdown} className="btn">Line-Up</Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Confirmation;
