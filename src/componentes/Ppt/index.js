import React, {Component} from 'react'
import Jugar from '../Jugar';
import Seleccion from '../Seleccion';
import './style.css';

export default class Ppt extends Component {
    constructor(props){
        super(props)
        this.opciones = ['piedra', 'papel', 'tijeras']
        this.state = {
            seleccion1:'tijeras',
            seleccion2:'piedra',
            ganador:''
            
        }
    }

    handleNext = (jugador) => {
        console.log('handleNext')
        if (jugador===1){
            var indice = this.opciones.indexOf(this.state.seleccion1)
            if (indice === 2) indice = 0;
            else indice++
            this.setState({seleccion1:this.opciones[indice]})
        }else{
            var indice = this.opciones.indexOf(this.state.seleccion2)
            if (indice === 2) indice = 0;
            else indice++
            this.setState({seleccion2:this.opciones[indice]})
        }
    }

    handlePrev = (jugador) => {
        console.log('handlePrev')
        if (jugador === 1){
            var indice = this.opciones.indexOf(this.state.seleccion1)
            if (indice === 0) indice = 2;
            else indice--
            this.setState({seleccion1:this.opciones[indice]})
        }else{
            var indice = this.opciones.indexOf(this.state.seleccion2)
            if (indice === 0) indice = 2;
            else indice--
            this.setState({seleccion2:this.opciones[indice]})
        }
    }

        render() {
        
        return (
            <div id="ppt">
                <div id='juego'>
                    <Seleccion handleNext={this.handleNext} handlePrev={this.handlePrev} jugador={1} seleccion={this.state.seleccion1}/>
                    <Jugar />
                    <Seleccion handleNext={this.handleNext} handlePrev={this.handlePrev} jugador={2} seleccion={this.state.seleccion1}/>
                </div>
            </div>
        )
    }
}