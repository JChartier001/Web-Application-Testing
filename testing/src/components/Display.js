import React from 'react';
import Strike from "./Strike";

const Display = (props) =>{
    return(
        <div className="display">
        <Strike />
        <div className="ballDisplay">Balls: {props.ball}</div>        
        </div>
    )
}

export default Display;