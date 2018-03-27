import React from 'react';
import {Link} from 'react-router';
import styles from '../css/style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import msg from '../img/msg.jpg';
import icon3 from '../img/icon3.jpg';
import icon from '../img/icon.jpg';

export default class Driver extends React.Component{

    componentDidMount() {
        let arr = document.querySelectorAll(".checklist ul li");
        for(let i=0; i<arr.length; i++){
            arr[i].onclick = function(e){
                e.preventDefault();
                if(this.style.backgroundColor == "rgb(0, 184, 217)"){
                    this.style.backgroundColor = "white";
                    this.querySelector('.tick').innerHTML = '&#8730';
                }else{
                    this.style.backgroundColor = "#00b8d9";
                    this.querySelector('.tick').innerHTML = '&#215';
                }
            };
        }

    }
    render() {
        return (
                <div>
                    <Header />
                    <div className="driver">
                        <h3> This is the Queue for</h3>
                        <h1> 7:15 P.M. </h1>
                        <div className="msg">
                            <div className="wrap">
                                <Link to="/chat">
                                    <img src={msg} alt="empty" />
                                    <h1>4</h1>
                                </Link>
                            </div>
                        </div>
                        <div className="checklist">
                            <div className="header">
                                <h1>    Check-List     </h1>
                            </div>
                            <ul>
                                <li>
                                    <h3>#1</h3>
                                    <div className="icon">
                                        <img src={icon3} alt="empty"/>
                                    </div>
                                    <h4>Yanzu Wu</h4>
                                    <h4 className="tick">&#8730;</h4>
                                </li>
                                <li>
                                    <h3>#2</h3>
                                    <div className="icon">
                                        <img src={icon} alt="empty"/>
                                    </div>
                                    <h4>Iron man</h4>
                                    <h4 className="tick">&#8730;</h4>
                                </li>
                                <li>
                                    <h3>#3</h3>
                                    <div className="icon">
                                        <img src={icon} alt="empty"/>
                                    </div>
                                    <h4>Iron man</h4>
                                    <h4 className="tick">&#8730;</h4>
                                </li>
                                <li>
                                    <h3>#4</h3>
                                    <div className="icon">
                                        <img src={icon} alt="empty"/>
                                    </div>
                                    <h4>Iron man</h4>
                                    <h4 className="tick">&#8730;</h4>
                                </li>
                                <li>
                                    <h3>#5</h3>
                                    <div className="icon">
                                        <img src={icon} alt="empty"/>
                                    </div>
                                    <h4>Iron man</h4>
                                    <h4 className="tick">&#8730;</h4>
                                </li>
                                <li>
                                    <h3>#6</h3>
                                    <div className="icon">
                                        <img src={icon} alt="empty"/>
                                    </div>
                                    <h4>Iron man</h4>
                                    <h4 className="tick">&#8730;</h4>
                                </li>
                                <li>
                                    <h3>#7</h3>
                                    <div className="icon">
                                        <img src={icon} alt="empty"/>
                                    </div>
                                    <h4>Iron man</h4>
                                    <h4 className="tick">&#8730;</h4>
                                </li>
                                <li>
                                    <h3>#8</h3>
                                    <div className="icon">
                                        <img src={icon} alt="empty"/>
                                    </div>
                                    <h4>Iron man</h4>
                                    <h4 className="tick">&#8730;</h4>
                                </li>
                                <li>
                                    <h3>#9</h3>
                                    <div className="icon">
                                        <img src={icon} alt="empty"/>
                                    </div>
                                    <h4>Iron man</h4>
                                    <h4 className="tick">&#8730;</h4>
                                </li>
                                <li>
                                    <h3>#10</h3>
                                    <div className="icon">
                                        <img src={icon} alt="empty"/>
                                    </div>
                                    <h4>Iron man</h4>
                                    <h4 className="tick">&#8730;</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Footer />
                </div>
        );
    }
}
