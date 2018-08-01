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
    }
  ]
}

  triggerSample = () => {
    // select key
    // select audio
    // add class 'playing'
  }

  render() {
    return (
      <div className="App">
          <ButtonList sample={this.state.sample} triggerSample={this.onClicKey}/>
      </div>
    );
  }
}

export default App;
