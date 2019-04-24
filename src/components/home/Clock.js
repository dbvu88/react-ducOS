
import React, { Component } from 'react';
import './Clock.css'

class App extends Component {
    constructor() {
        super()
        
        const hourHand = this.getHandAngle(new Date().getHours(), 12)
        const minHand = this.getHandAngle(new Date().getMinutes(), 60)
        const secHand = this.getHandAngle(new Date().getSeconds(), 60)

        this.state = {
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
        
        const minute = new Date().getMinutes()
        const min = minute > 9 ? minute : '0' + minute
        const hour = new Date().getHours()
        const ampm = hour < 12 ? 'AM' : 'PM' 
        const date = new Date().getDate() 
        const month = new Date().getMonth()
        const year = new Date().getFullYear()
        return (
            <div className="Clock-screen">
                <div className='date-display'>{new Date().toLocaleDateString()}</div>   
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
                        {`${hour%12}:${min}${ampm}`}
                    </div>         
                </div>
                       
            </div>

    );
  }
}

export default App;
