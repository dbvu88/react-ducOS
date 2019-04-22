
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './styles.css'

class App extends Component {
  render() {
    console.log('about')
    return (
      <div className="App-container">
        <article className='application-about-article'>
          <h2>Welcome to DucOS.</h2>
          <p>DucOS is a Web Portfolio that I developed to look and feel like an actual Operating System.</p>
          <p>However, I do hope that it can become an actual Web Operating System eventually.</p>
          <p>Therefore, I will continue to integrate more  awesome features and amazing applications to DucOS.</p>
          <p>Please stay tuned for upcoming features and DucOS applications!!</p>
          <p>Please stay tuned for upcoming features and DucOS applications!!</p>
          <p><Link to='/apps/upcoming-changes'>Click here to read my notes on upcoming changes!</Link></p>
          <p>You can contact me at:</p>
          <ul>
            <li><a href='https://www.linkedin.com/in/dbv135/'>LinkedIn</a></li>
            <li><a href='https://github.com/vud531'>GitHub</a></li>
            <li><a href='https://twitter.com/DucVu99'>Twitter</a></li>
            <li>Email: ducbavu531@gmail.com</li>
          </ul>


        </article>
      </div>
    );
  }
}

export default App;
