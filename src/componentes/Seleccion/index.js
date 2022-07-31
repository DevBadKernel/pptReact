import React from 'react'
import './style.css';
import Piedra from '../../images/piedra.png'
import Papel from '../../images/papel.png'
import Tijeras from '../../images/tijeras.png'
import Boton from '../Boton';

const Seleccion = ({}) => {

    return (
        <div id='seleccion'>
            <img src={Piedra}></img>
            <div id='botones'>
                <Boton />
                <div id='opcion'>Prueba</div>
                <Boton />
            </div>
        </div>
    )
}

export default Seleccion