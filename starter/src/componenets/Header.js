import React from 'react';
import logo from '../img/logo.png';

export default class Header extends React.Component {

    render(){
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand logo-nav" href="#"><img src={logo}/></a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="profile.html">Profile</a></li>
                            <li><a href="chatroom.html">Chatting Room</a></li>
                            <li><a href="login.html">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
