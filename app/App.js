import React, {PropTypes} from 'react';

class App extends React.Components{
  render(){
    return(
      <div className="container-fluid">
        <p>Header here...</p>
        {this.props.children}
      </div>
    )
  }
}

App.PropTypes={
  children: PropTypes.object.isRequired
};

export default App;
