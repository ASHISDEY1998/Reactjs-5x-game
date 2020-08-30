import React from 'react'
import '../App.css';

export default function Inputpage(props) {
    let checkFire=(e)=>{
        if(e.key==="Enter" && e.target.value){
            props.updatePage("output")
        }
    }
    return (
        <form onSubmit={(event)=>{event.preventDefault();}}>
            <label htmlFor="inputbox" style={{marginRight:"10px"}}>Enter the game matrix size:</label>
            <input id="inputbox" type="number" className="input-style" onKeyDown={(event)=>{checkFire(event)}} onChange={(event)=>{props.update(event.target.value)}}/>
        </form>
    )
}

