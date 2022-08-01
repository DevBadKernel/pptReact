import React from 'react'
import './style.css';

const Boton = ({content, handleClick}) => {
    
    return (
        <div id='boton' onClick={handleClick}>{content}</div>    
    )
}

export default Boton