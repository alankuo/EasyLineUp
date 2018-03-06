
import React from 'react';
import {Link} from 'react-router';

class TimeButton extends React.Component{
  constructor(props){
      super(props);

      this.state = {
        time: this.props.time
      };

  }

  render() {
    return(
      <div>
        <button type="button" className="btn btn-primary" onClick={() => {this.props.changeTime(this.state.time)}}>{this.state.time}</button>
      </div>
    );
  }
}

export default TimeButton;
