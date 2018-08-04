import React, { Component } from 'react';
import Button from './Button';

class ButtonList extends Component {
   
	render(){
        return (
            <div className="keys">
                {this.props.sample.map((s, index) => (
                   
                   <Button
                    
                        key={index}
                        dataKey={s.dataKey}
                        letter={s.letter}
                        sound={s.sound}
                        onKeyDown={this.props.onKeyDown}
                    />
                 
                ))}
            
            </div>
        )
    }
}

export default ButtonList; 