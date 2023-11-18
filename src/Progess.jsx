import React from "react"

function Progess (){
    return (
<div className="loading-text" style={{ padding: '10px', textAlign: 'center' }}>
        <p>{Progess < 100 ? 'Loading...' : 'Complete!'}</p>
      </div>
    )
}

export  default Progess;
