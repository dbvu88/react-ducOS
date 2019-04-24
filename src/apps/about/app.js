
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './styles.css'
import linkedin from './social-media-icon/linkedin.png'
import github from './social-media-icon/github.png'
import gmail from './social-media-icon/gmail.png'
import twitter from './social-media-icon/twitter.png'

class App extends Component {
  render() {
    console.log('about')
    return (
      <div className="App-container">
        <article className='application-about-article'>
          <h2>Welcome to DucOS.</h2>
          <p>DucOS is a Interactive Portfolio that I developed to look and feel like an actual Operating System.</p>
          <p>However, I do hope that it can become an actual Web Operating System eventually.</p>
          <p>Therefore, I will continue to integrate more  awesome features and amazing applications to DucOS.</p>
          <p>Please stay tuned for upcoming features and DucOS applications!!</p>

          <p><a href='https://github.com/vud531/react-ducOS'>Click here to go to DucOS git repo!</a></p>
          <p><Link to='/apps/upcoming-changes'>Click here to read my notes on upcoming changes!</Link></p>
          <p>I also love meeting new people, please click one the icons below to connect with me.</p>
          
          <a href='https://www.linkedin.com/in/dbv135/'><img className='social-media' src={linkedin} /></a>
          <a href='https://github.com/vud531'><img className='social-media' src={github} /></a>
          <a href='https://twitter.com/DucVu99'><img className='social-media' src={twitter} /></a>
          <a href='mailto: ducbavu531@gmail.com'><img className='social-media' src={gmail} />ducbavu531@gmail.com</a>
          {/* <a href='https://codepen.io/vud531/'><img className='social-media' src={codepen} /></a> */}

          {/* <ul>
            <li><a href='https://www.linkedin.com/in/dbv135/'>LinkedIn</a></li>
            <li><a href='https://github.com/vud531'>GitHub</a></li>
            <li><a href='https://twitter.com/DucVu99'>Twitter</a></li>
            <li>Email: ducbavu531@gmail.com</li>
          </ul> */}


        </article>
      </div>
    );
  }
}

export default App;
