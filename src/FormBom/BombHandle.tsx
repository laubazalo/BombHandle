import React, {useState} from "react";



const [req,setRequest] = useState({value:""})


const handleSumbit = ()=>{
    console.log("Sumbit form")
}

const powerOn =()=>{

}
const powerOff=()=>{

}

const changeInput=()=>{
    console.log("Cambiando.. ", req.value)
}



const bombHandle =()=>{

  

    return (
        <>
        <div className="container">
        <button onClick={powerOn}> Power On</button>
        <button onClick={powerOff}> Power Off</button>
        <form onSubmit={handleSumbit}> 
        <label>
             Power On - Delay
        <input type="number" value={req.value} onChange={changeInput}></input>
        </label>
        </form>
        </div>
        </>
        )
}

export default bombHandle


