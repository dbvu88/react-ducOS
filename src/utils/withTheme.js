
import React, { Component } from 'react';
import { themes } from './themes/themes.js'
import './themes/themes.css'

export default WrappedComponent => {
    return class withTheme extends Component{
        state = {
            currentTheme: '',
            style: {
                color: '#192430',
                background: '#bc8b53'
            }
        }

        componentDidMount() {
            // this.setState({
            //     currentTheme: this.state.themes[4]
            // })
        }

        render = () => {
            return (
                // <div className={`themed-component`} style={this.state.style}>
                <WrappedComponent style={this.state.style}/>
                // </div>
            )
        }
        
    }
}


