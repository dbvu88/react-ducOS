
import React, { Component } from 'react';
import './Clock.css'

class App extends Component {
    constructor() {
        super()
        const secAngle = this.getHandAngle(new Date().getSeconds(), 60)
        const hourAngle = this.getHandAngle(new Date().getSeconds(), 30)
        const minAngle = this.getHandAngle(new Date().getMinutes(), 60)
        this.state = {
            secAngle: secAngle,
            hourAngle: hourAngle,
            minAngle: minAngle,
        }
    }

    componentWillMount = () => {
        setInterval(this.getCurrentTime, 1000)
    }
    getCurrentTime = () => {
        // console.log(this.state.secAngle)
        const secAngle = this.getHandAngle(new Date().getSeconds(), 60)
        const hourAngle = this.getHandAngle(new Date().getSeconds(), 30)
        const minAngle = this.getHandAngle(new Date().getMinutes(), 60)

        this.setState({
            secAngle: secAngle,
            hourAngle: hourAngle,
            minAngle: minAngle

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
