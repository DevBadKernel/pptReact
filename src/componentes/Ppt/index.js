import React, {Component} from 'react'
import Boton from '../Boton';
import Seleccion from '../Seleccion';
import './style.css';

export default class Ppt extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

        render() {
        
        return (
            <div id="ppt">
                <div id='juego'>
                    <Seleccion />
                    <Boton />
                    <Seleccion />
                </div>
            </div>
        )
    }
}