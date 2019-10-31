import React, {useState} from 'react';
import Display from "./Display";


const Strike = () =>{
    const[strike, setStrike] = useState(0);

    return(
        <div className="strike">
        <Display strike={strike}/>
        <button onClick= {() => { if (strike === 3){
            setStrike(0);
        } else {
            setStrike(strike + 1);
                }
         }
        }>Strike</button>
        </div>
    )
}

export default Strike;