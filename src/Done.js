import React from "react";


const Done = (props)=> {
    const winner =props.winner;
    return(
       
        <div className="done" >
             <div className="btn">
             <h1>Winner is Player-{winner}</h1> 
             <p> Refresh to pay Again &#128512;</p>
             </div>
            
        </div>
        
        
        
    );
};



export default Done;
