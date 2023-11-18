import React from "react";
import './App.css'
import ProgressBar from "./assets/ProgessBar";

 
  function App(){
        
    return (
        <>
        <div className="p-10 flex flex-col">
        <h1 className="text-center p-4 text-2xl">Progess Bar</h1>
        <div className="bo"><ProgressBar /></div>
        </div>
        
        </>
    )
}

export default App
