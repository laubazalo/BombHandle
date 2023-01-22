import React from 'react';
import logo from './remote.png';
import { useState } from "react";
import * as css from './app-style.css'
import '@ionic/react/css/core.css';


function App() {
  const host='http://191.84.236.188:9290'

  const [numState,setState]=useState({
    num:" "
  })
  
  const handleChange= (event)=> {
    setState({num: event.target.value});
    console.log("num is " + numState.num)
  }
  
  const handleSubmit =(event)=> {
    let endpoint= host+"/powerWithDelay?delay=" + numState.num
    console.log("el endpoint es: "+endpoint)
    fetch(host)
    .then(response=>console.log(response))
    .then(alert("Prendido por "+numState.num + " minutos"))
    .catch(err=>console.log(err))
  
   
  }
  
  const onPower=()=>{
    let endpoint=host+"/onBomb"
    fetch(endpoint)
    .then(response=>console.log(response))
    .then(alert("Prendiendo bomba"))
    .catch(err=>console.log(err))
  }
  
  const offBomb=()=>{
    let endpoint= host+"/offBomb"
    fetch(endpoint)
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
      <button type="button" className="btn btn-light" onClick={offBomb}>Apagar</button>
    </li>    
    
    <form onSubmit={handleSubmit} className='flex-column'>
      <label>Prender durante: </label>
      <input type="number"  min={0} value={numState.num} onChange={handleChange}></input>
      <button type="submit" name="quantity" className="btn btn-danger">Prender</button>
    </form>
    
     </ul> 
       
    </div>
  );
}

export default App;
