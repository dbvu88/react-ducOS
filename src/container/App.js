
import React, { Component } from 'react';

class App extends Component {
    render() {
        console.log(this.props)
        const appName = this.props.match.params.app
        const Application = require(`../apps/${appName}/app`).default

        return (
            <div className="App-screen">
                <Application />
            </div>
        );
    }
}

export default App;
