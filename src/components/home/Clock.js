
import React, { Component } from 'react';
import './Clock.css'

class App extends Component {
  render() {
    return (
      <div className="clock-display">
        <div className='hand hand-hour'></div>        
        <div className='hand hand-min'></div>        
        <div className='hand hand-sec'></div>        
      </div>
    );
  }
}

export default App;
