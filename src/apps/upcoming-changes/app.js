
import React, { Component } from 'react';
import './styles.css'

class App extends Component {
  render() {
    // console.log('about')
    return (
      <div className="App-container">
        <article className='application-upcoming-changes-article'>
          <h3>Upcoming Features:</h3>
          <h4>Color Themed Selection</h4>
          <p>Let users pick a color schemes from built-in Themes List</p>
          <h4>Multitask</h4>
          <p>Let users run multiple apps at once, and switch between different apps from Tasks page</p>
          
          <h4>Home Screen Weather Display</h4>
          <p>Display local weather using API Weather</p>
          
          <h3>Upcoming App:</h3>
          <h4>Trapkit</h4>
          <p>A musical instrument that let users play differnt beat using a virtual keyboard</p>
          <h4>Utilities Apps</h4>
          <p>Apps such as calulator, stopwatch, note-taking, to-do list, etc </p>

          <h3>Upcoming Game:</h3>
          <h4>Idle/Lazy Game</h4>
          <p>A game that requires a minimal interaction from the users.</p>

        </article>
      </div>
    );
  }
}

export default App;
