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
                        
                    />
                 
                ))}
            
            </div>
        )
    }
}

export default ButtonList; 