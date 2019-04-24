
import React, { Component } from 'react';
import './Clock.css'

class App extends Component {
    constructor() {
        super()
        this.state = { datetime: new Date() }
    }

    componentWillMount = () => {
        setInterval(this.getCurrentTime, 1000)
    }

    getCurrentTime = () => {
        this.setState({ datetime: new Date() })
    }

    getHandAngle = (value, tick) => (
        {
            transform: `rotate(${parseInt(value)*360/tick + 90}deg)`
        }
    )

    render = () => {
        
        const minute = new Date().getMinutes()
        const min = minute > 9 ? minute : '0' + minute
        const hour = new Date().getHours()
        const ampm = hour < 12 ? 'AM' : 'PM'
        
        const hourAngle = this.getHandAngle(hour, 12)
        const minAngle = this.getHandAngle(min, 60)
        const secAngle = this.getHandAngle(new Date().getSeconds(), 60)
        const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][new Date().getDay()]
        const month = ['January', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][new Date().getMonth()]
        const date = new Date().getDate()
        return (
            <div className="Clock-screen">
                <div className='date-display'>{day}, {month} {date}</div>   
                <div className="clock-display">
                    <div 
                    className='hand hand-hour'
                    style={hourAngle}
                    ></div>        
                    <div 
                    className='hand hand-min'
                    style={minAngle}
                    ></div>        
                    <div 
                    className='hand hand-sec'
                    style={secAngle}
                    ></div>
                                    
                </div>    
                        
                <div 
                    className='watch-display'> {`${hour%12}:${min}${ampm}`}
                </div>        
            </div>
        );
    }
}

export default App;
