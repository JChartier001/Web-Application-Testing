import React from 'react'

const Hits = (props) => {
    
return(
    <div className="hit">
        <button className="hit" onClick= {() => { props.setStrike(0); props.setBall(0)}}>Hit</button> 
    </div>           
)  
}

export default Hits;