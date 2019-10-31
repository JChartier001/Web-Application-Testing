import React from 'react'

const Out = (props) =>{
    
    return(
        <div className="out">
            <div>Outs: {props.out}</div>
            <button onClick={() => { if (props.out === 2){
            props.setOut(0);
        } else {
            props.setOut(props.out + 1);
                }
         }}>Out</button>
        </div>
    )
    
}
export default Out;