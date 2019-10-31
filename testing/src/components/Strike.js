import React from 'react';


const Strike = (props) =>{
    console.log("strike", props)

    return(
        <div className="strike">
        <div>Strike: {props.strike}</div>
        <button onClick= {() => { if (props.strike === 2){
            props.setStrike(0); if (props.strike === 2 && props.out >2){
                props.setOut(0)}
                else{
                    props.setOut(props.out + 1);}
        } else {
            props.setStrike(props.strike + 1);
                }
         }
        }>Strike</button>
        </div>
    )
}

export default Strike;