
import React from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component{

    GetDirection0() {
        localStorage.setItem("direction","UCSD => VOR");
        window.location.href='timeslot';
    }
    GetDirection1() {
        localStorage.setItem("direction","VOR => UCSD");
        window.location.href='timeslot';
    }

    render(){
        return (
            <div>
                <h1 style={{marginTop:130+'px'}}>Choose Your Route</h1>
                <div className="address" style={{border:'none'}}>
                    <button onClick={this.GetDirection0}><span>UCSD => VOR</span></button>
                    <button onClick={this.GetDirection1}><span>VOR => UCSD</span></button>
                </div>
            </div>
        );
    }
}
