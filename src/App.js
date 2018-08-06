import React, { Component } from 'react';
import Button from './Button';
import './App.css';

class App extends Component {
  state = {
    playing: null,
    sample: {
      65: {
        letter: "A",
        sound: "ahh",
      },
       83: {
        letter: "S",
        sound: "haah",
      },
      // more samples
    }
}

  playSample = (e) => {
    console.log(e)
    this.setState({playing: e.keyCode }, () => {
      setTimeout(() => {
        this.setState({playing: null});
      }, 400);
    })
  };

  render() {
    return (
      <div className="App">
      <div className="keys" tabIndex="0" onKeyDown={this.onKeyPressed}>
          {Object.keys(this.state.sample).map(key => (
            <Button key={key} {...this.state.sample[key]} play={this.state.playing === Number(key)} />
          ))}
      </div>
      </div>
    );
  }
}

export default App;
