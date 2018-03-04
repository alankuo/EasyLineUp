import React from 'react';
import {Link,browserHistory} from 'react-router';

export default class Home extends React.Component{    
    render(){
        return (
            <div>
                <h1 style={{marginTop:130+'px'}}>Choose Your Route</h1>
                <div className="address" style={{border:'none'}}>
                    <Link to = "/TimeSlot/UCSD => VOR" onClick={this.GetDirection0}><button><span>UCSD => VOR</span></button></Link>
                    <Link to = "/TimeSlot/VOR => UCSD"  onClick={this.GetDirection1}><button><span>VOR => UCSD</span></button></Link>
                </div>
            </div>
        );
    }
}