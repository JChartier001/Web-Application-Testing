import React from 'react';

const Display = (props) =>{
    return(
        <div className="display">
        <div className="strikeDisplay">Strikes: {props.strike}</div>
        <div className="ballDisplay">Balls: {props.ball}</div>        
        </div>
    )
}

export default Display;