import React from 'react';
import Strike from "./Strike";
import Balls from './Balls';
import Foul from "./Foul";
import Hits from "./Hits"
import Out from "./Out";

const Display = (props) =>{
    console.log("in display",props);
    return(
        <div className="display">
        <Strike  strike={props.strike} setStrike={props.setStrike} out={props.out} setOut={props.setOut}/>
        <Balls ball={props.ball} setBall={props.setBall}/>
        <Foul strike={props.strike} setStrike={props.setStrike}/>
        <Hits setStrike={props.setStrike} setBall={props.setBall}/>
        <Out out={props.out} setOut={props.setOut}/>
        </div>
    )
}

export default Display;