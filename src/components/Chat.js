import React from 'react';
import '../css/chat.css';
import icon1 from '../img/icon.jpeg';
import icon2 from '../img/icon2.jpg';
import icon3 from '../img/icon3.jpg';
import {Link} from 'react-router';

export default class Chat extends React.Component{
    constructor() {
        super();

        // Initial state
        this.state = {
          message:[]
        };

        this.clickFunction = this.clickFunction.bind(this);
    }
    componentDidMount() {
        document.querySelector(".input textarea").onkeypress = function(e){
                if(e.which == 13){
                    e.preventDefault();
                    document.querySelector(".input button").click();
                    document.querySelector('.input textarea').value = "";
                }
        };
        // console.log('a');
        document.querySelector(".input button").onclick = (function(e){
                // console.log('a');

                // var msg = ` <li class="box-right">\
                //         <div class="icon">\
                //             <img src=${icon3} alt="Flowers" />\
                //         </div>\
                //         <div class="msg">\
                //             <div class="triangle"></div>\
                //             <p class="right">${document.querySelector('.input textarea').value}</p>\
                //         </div>\
                //     </li>`;
                // document.querySelector('.user_queue').innerHTML += msg;
                let msg = this.state.message;
                msg.push(document.querySelector('.input textarea').value);
                // console.log(document.querySelector('.input textarea').value);
                this.setState({message:msg});
                document.querySelector('.user_queue').scrollTop += 100000000000;
                document.querySelector('.input textarea').value = "";

        }).bind(this);
    }

    clickFunction(){}

    renderChat() {
        // console.log("render");
        let msg = [];
        for(let i=0; i<this.state.message.length; i++){

            msg.push(
            <li className="box-right">
                <div className="icon">
                    <img src={icon3} alt="Flowers" />
                </div>
                <div className="msg">
                    <div className="triangle"></div>
                    <p className="right">{this.state.message[i]}</p>
                </div>
            </li>);
        }

        return msg;

    }

    render() {
        return (
            <div className="container window">
                <Link id="back_btn" to="/">&lt;Back</Link>
                <div className="navi">
                    <h1>Chat Room 3</h1>
                </div>
                <ul className="user_queue">
                    {this.renderChat()}
                </ul>
                <div className="input">
                    <textarea></textarea>
                    <button className="btn">Send</button>
                </div>
            </div>
        );
    }
}
