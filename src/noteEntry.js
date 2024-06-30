import React from 'react';
import { useState } from 'react';
import './noteEntry.css';


export default function NoteEntry(props) {
    const [bgColor, setBgColor] = useState();
    const [strikeThrough, setStrikeThrough] = useState();

    function changeStates() {
        if(!bgColor) {
            setBgColor('black');
            setStrikeThrough('line-through');
        } else {
            setBgColor();
            setStrikeThrough();
        }
    }
    
    return(
        <>
            <span className="dot" style={{top: ((props.top + 25) + "px"), backgroundColor: bgColor}} onClick={changeStates}> </span>
            <input className="inputField" style={{top: ((props.top + 0.5) + "px"), textDecoration: strikeThrough}} type="text" maxLength={105} /> 
            <div className="line" style={{top: (props.top + 102) + "px" }} />
            <span className="backdrop" style={{top: (props.top) + "px"}}></span>
        </>
    )
}

