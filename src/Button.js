import React, { Component } from 'react';

class Button extends Component {

	render(){
        console.log(this.props)
        
        return (
            <div>
                    <div data-key={this.props.dataKey} className="key">
                        <kbd>{this.props.letter}</kbd>
                    <span className="sound">{this.props.sound}</span>
                </div>
            
            </div>
        )
    }
}

export default Button; 