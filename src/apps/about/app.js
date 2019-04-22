
import React, { Component } from 'react';
import './styles.css'

class App extends Component {
  render() {
    console.log('about')
    return (
      <div className="App-screen">
        <article className='application-about-article'>
          <h2>DucOS</h2>
          <p>DucOS is an OS-themed web portfolios developed by Duc Vu. The </p>
        </article>
      </div>
    );
  }
}

export default App;
