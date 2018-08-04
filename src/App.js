import React, { Component } from 'react';
import ButtonList from './ButtonList';
import './App.css';

class App extends Component {
  state = {
  sample: [
    {
      dataKey: "65",
      letter: "A",
      sound: "ahh!" 
    },
    {
      dataKey: "83",
      letter: "S",
      sound: "haah!" 
    },
    // more samples
  ]
}

  playSample = () => {
    console.log('PLAY SAMPLE')
    // select key
    // select audio
    // add class 'playing'
  }

  render() {
    return (
      <div className="App">
          <ButtonList sample={this.state.sample} onKeyDown={this.playSample}/>
      </div>
    );
  }
}

export default App;
