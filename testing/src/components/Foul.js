import React from 'react'

const Foul = (props) =>{
    return (
        <div className="foul">
        <button className="foul"  onClick= {() => { if (props.strike < 2){props.setStrike(props.strike +1);
                    } else {
                    }
                    }}>Foul</button>
                    </div>
    );
}
export default Foul;