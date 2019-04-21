
import React, { Component } from 'react';
import { themes } from './themes/themes.js'
import './themes/themes.css'

export default WrappedComponent => {
    return class withTheme extends Component{
        state = {
            currentTheme: '',
            themes: themes
        }

        componentDidMount() {
            this.setState({
                currentTheme: this.state.themes[4]
            })
        }

        render = () => {
            return (
                <div className={`themed-container ${this.state.currentTheme}`}>
                    <WrappedComponent />
                </div>
            )
        }
        
    }
}


