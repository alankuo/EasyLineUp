
import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

class TimeButton extends React.Component{
  constructor(props){
      super(props);

      this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleTimeChange(){
    this.props.changeTime(this.props.time);
  }

  render() {
    return(
      <div>
        <button type="button" className="btn btn-primary" onClick={this.handleTimeChange}>{this.props.time}</button>
      </div>
    );
  }
}

TimeButton.propTypes = {
   time: PropTypes.string,
   changeTime: PropTypes.func
 };

export default TimeButton;
