import React from 'react'
import Boton from '../Boton'

const Jugar = ({jugada}) => {
    return (
        <div>
            <Boton content='Jugar' handleClick={jugada}/>
        </div>
    )
}

export default Jugar