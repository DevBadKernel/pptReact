import React from 'react'
import './style.css';
import Piedra from '../../images/piedra.png'
import Papel from '../../images/papel.png'
import Tijeras from '../../images/tijeras.png'
import Boton from '../Boton';

const Seleccion = ({jugador, handleNext, handlePrev, seleccion, ganadas}) => {
    
    let nextOption = () => {
        handleNext(jugador)
    }

    let prevOption = () => {
        handlePrev(jugador)
    }

    return (
        <div id='seleccion'>
            {seleccion === 'piedra' && <img src={Piedra}/>}
            {seleccion === 'papel' && <img src={Papel}/>}
            {seleccion === 'tijeras' && <img src={Tijeras}/>}
            <div id='botones'>
                <Boton content='<' handleClick={nextOption}/>
                <div id='opcion'>{seleccion}</div>
                <Boton content='>' handleClick={prevOption}/>
            </div>
            <div>
                {ganadas}
            </div>
        </div>
    )
}

export default Seleccion