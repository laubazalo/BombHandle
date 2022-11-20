import React from 'react';
import logo from './remote.png';
import { useState } from "react";
import * as css from './app-style.css'

function App() {
  const host='http://192.168.1.38'

  const [numState,setState]=useState({
    num:""
  })
  
  const handleChange= (event)=> {
    setState({num: event.target.value});
    console.log("num is " + numState.num)
  }
  
  const handleSubmit =(event)=> {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  
  const onPower=()=>{
    
    fetch("/onBomb",{
      referrer:host
    })
    .then(response=>console.log(response))
    .then(alert("Prendiendo bomba"))
    .catch(err=>console.log(err))
  }
  
  const offBomb=()=>{
    fetch("/offBomb",{
      referrer:host
    })
    .then(response=>console.log(response))
    .then(alert("Apagando bomba"))
    .catch(err=>console.log(err))
  }
    

  return (
    <div className='App'>
     <ul>
    <li>
      <img src={logo}  className='justify-content-center' alt="logo" />
    </li>
    <li>
      <button type="button" className="btn btn-danger" onClick={onPower}>Prender</button>
    </li>
    <li>
      <button type="button" className="btn btn-dark" onClick={offBomb}>Apagar</button>
    </li>    
    <li>

    <form onSubmit={handleSubmit}>
      <label>Prender durante: </label>
      <input type="number" className='mt-3 mb-1' min={0} value={numState.num} onChange={handleChange}></input>
    </form>
    </li>
     </ul> 
       
    </div>
  );
}

export default App;
