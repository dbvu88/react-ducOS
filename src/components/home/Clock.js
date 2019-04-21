
import React, { Component } from 'react';
import './Clock.css'

class App extends Component {
    constructor() {
        super()
        const secAngle = this.getHandAngle(new Date().getSeconds(), 60)
        this.state = {
            secAngle: secAngle,
        }
    }

    componentWillMount = () => {
        setInterval(this.getCurrentTime, 1000)
    }
    getCurrentTime = () => {
        console.log(this.state.secAngle)
        const secAngle = this.getHandAngle(new Date().getSeconds(), 60)
        this.setState({
            secAngle: secAngle,
        })
    }

    getHandAngle = (value, tick) => (
        {
            transform: `rotate(${parseInt(value)*360/tick + 90}deg)`
        }
    )

    


    render() {
        return (
        <div className="clock-display">
            <div 
            className='hand hand-hour'
            style={this.state.hourAngle}
            ></div>        
            <div 
            className='hand hand-min'
            style={this.state.minAngle}
            ></div>        
            <div 
            className='hand hand-sec'
            style={this.state.secAngle}
            ></div>        
        </div>
    );
  }
}

export default App;
