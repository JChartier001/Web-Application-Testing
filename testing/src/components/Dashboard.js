import React, {useState} from 'react'
import Display from "./Display";
import Strike from "./Strike";




const Dashboard = () =>{

const[ball, setBall] = useState(0);



    return(
        <div className="dashboard">
        <Display />
        <Strike />      
            
                     
        {/* <button className="ball"  onClick= {() => { if (ball === 4){
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
        }}>Hit</button>  */}
       </div>
    
 )   
}

export default Dashboard;