import React, { Component } from 'react';

class Button extends Component {
    componentDidMount() {
        this.audio = new Audio();
        this.audio.src = require(`./sounds/${this.props.sound}.mp3`);
      }

    nowPlay = (e) => {
        if (e) {
            this.audio.currentTime = 0;
            this.audio.play();
        }
    };

	render(){
        const className = this.props.play ? "key key--playing" : "key";
        this.nowPlay(this.props.play);
        return (
            
                    <div 
                        data-key={this.props.dataKey}
                        className="key" 
                        onKeyDown={(e) => this.nowPlay(e)}
                        tabIndex="1"
                    >
                        <kbd>{this.props.letter}</kbd>
                    <span className="sound">{this.props.sound}</span>
                </div>
            
            
        )
    }
}

export default Button; 