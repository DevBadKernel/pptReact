import React from 'react'
import './style.css';
import Piedra from '../../images/piedra.png'
import Papel from '../../images/papel.png'
import Tijeras from '../../images/tijeras.png'
import Boton from '../Boton';

const Seleccion = ({jugador, handleNext, handlePrev}) => {
    
    let nextOption = () => {
        handleNext(jugador)
    }

    let prevOption = () => {
        handlePrev(jugador)
    }

    return (
        <div id='seleccion'>
            <img src={Piedra}></img>
            <div id='botones'>
                <Boton content='<' handleClick={nextOption}/>
                <div id='opcion'>Prueba</div>
                <Boton content='>' handleClick={prevOption}/>
            </div>
        </div>
    )
}

export default Seleccion