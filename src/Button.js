import React, { Component } from 'react';

class Button extends Component {
    nowPlay = e => {
        console.log('now play function in button ' + e.key)
        this.props.onKeyDown(e.target.value);
    }

	render(){
        //console.log(this.props)
        
        return (
            <div>
                    <div 
                        data-key={this.props.dataKey}
                        className="key" 
                        onKeyPress={(e) => this.nowPlay(e)}
                        tabIndex="1"
                    >
                        <kbd>{this.props.letter}</kbd>
                    <span className="sound">{this.props.sound}</span>
                </div>
            
            </div>
        )
    }
}

export default Button; 