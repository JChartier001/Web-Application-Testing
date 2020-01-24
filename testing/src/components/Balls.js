import React from 'react'



const Balls = (props) =>{
    

    return(
        <div className="ball">
            <div>Ball: {props.ball}</div>
        <button className="ball"  onClick= {() => { if (props.ball === 3){
            props.setBall(0);
        } else {
            props.setBall(props.ball + 1);
        }
        }}>Ball</button>
        </div>

    )
}

export default Balls;