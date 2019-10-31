import React, {useState} from 'react'
import Display from "./Display";




const Dashboard = () =>{
const[strike, setStrike] = useState(0);
const[ball, setBall] = useState(0);



    return(
        <div className="dashboard">
            <Display strike={strike} ball={ball} />
        <button className="strike" onClick= {() => { if (strike === 3){
            setStrike(0);
        } else {
            setStrike(strike + 1);
        }
        }}>Strike</button>
        <button className="ball"  onClick= {() => { if (ball === 4){
            setBall(0);
        } else {
            setBall(ball + 1);
        }
        }}>Ball</button>
        <button className="foul"  onClick= {() => { if (strike < 2){
            setStrike(strike +1);
        } else {
            
        }
        }}>Foul</button>
        <button className="hit"  onClick= {() => { setStrike(0); setBall(0)
        }}>Hit</button>
        </div>
    )
}

export default Dashboard;