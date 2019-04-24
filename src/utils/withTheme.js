
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
        }

        render = () => {
            return (
                <WrappedComponent style={this.state.style}/>
            )
        }
        
    }
}


