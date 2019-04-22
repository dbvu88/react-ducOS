
import React, { Component } from 'react';
import './Clock.css'

class App extends Component {
    constructor() {
        super()
        
        const hourHand = this.getHandAngle(new Date().getHours(), 12)
        const minHand = this.getHandAngle(new Date().getMinutes(), 60)
        const secHand = this.getHandAngle(new Date().getSeconds(), 60)

        this.state = {
            minute: new Date().getMinutes(),
            hour: new Date().getHours(),
            date: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            secAngle: secHand,
            minAngle: minHand,
            hourAngle: hourHand,
        }
    }

    componentWillMount = () => {
        setInterval(this.getCurrentTime, 1000)
    }
    getCurrentTime = () => {
        
        const hourHand = this.getHandAngle(new Date().getHours(), 12)
        const minHand = this.getHandAngle(new Date().getMinutes(), 60)
        const secHand = this.getHandAngle(new Date().getSeconds(), 60)

        this.setState({
            minute: new Date().getMinutes(),
            hour: new Date().getHours(),
            date: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            secAngle: secHand,
            minAngle: minHand,
            hourAngle: hourHand,
        })
    }

    getHandAngle = (value, tick) => (
        {
            transform: `rotate(${parseInt(value)*360/tick + 90}deg)`
        }
    )

    render() {
        return (
            <div className="Clock-screen">
                <br></br>
                <div className='date-display'> {`${this.state.month + 1}/${this.state.date}/${this.state.year}`}</div>   
                <br></br>
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
                                    
                    <div 
                    className='watch-display'>
                        {`${this.state.hour - 12}:${this.state.minute} ${this.state.hour < 12 ? 'AM' : 'PM' }`}
                    </div>         
                </div>
                       
            </div>

    );
  }
}

export default App;
