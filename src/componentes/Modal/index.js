import React from 'react'
import './style.css'

const Modal = ({ganador, handleReset}) => {
    if (ganador !== ''){
    return (
        <div id='modal'>
            {ganador != 'empate' && `El ganador es ${ganador}`}
            {ganador === 'empate' && 'Empate'}
            <div id='reset' onClick={handleReset}>RESET</div>
        </div>
    )}
    else {
        return null
    }
}

export default Modal