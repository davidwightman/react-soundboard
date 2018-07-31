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

  render() {
    return (
      <div className="App">
          <ButtonList sample={this.state.sample} onClickButton={this.props.onClickButton}/>
      </div>
    );
  }
}

export default App;
