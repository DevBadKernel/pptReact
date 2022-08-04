import React, {Component} from 'react'
import Jugar from '../Jugar';
import Modal from '../Modal';
import Seleccion from '../Seleccion';
import './style.css';

export default class Ppt extends Component {
    constructor(props){
        super(props)
        this.opciones = ['piedra', 'papel', 'tijeras']
        this.state = {
            seleccion1:'tijeras',
            seleccion2:'piedra',
            ganador:'',
            ganadas1:0,
            ganadas2:0
            
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

    jugada = () => {
        var {ganador, ganadas1, ganadas2} = this.state;
        if((this.state.seleccion1==='piedra' && this.state.seleccion2==='tijeras') || (this.state.seleccion1==='papel' && this.state.seleccion2==='piedra') || (this.state.seleccion1==='tijeras' && this.state.seleccion2==='papel')){
            console.log("gana jugador 1");
            ganador = 'jugador 1';
            ganadas1++
        }
        else if((this.state.seleccion2==='piedra' && this.state.seleccion1==='tijeras') || (this.state.seleccion2==='papel' && this.state.seleccion1==='piedra') || (this.state.seleccion2==='tijeras' && this.state.seleccion1==='papel')){
            console.log("gana jugador 2");
            ganador = 'jugador 2';
            ganadas2++
        }
        else{
            console.log("empate");
            ganador = 'empate';
        }
        this.setState({ganador,ganadas1,ganadas2})
    }

    handleReset = () => {
        this.setState({seleccion1:'tijeras', seleccion2:'piedra',ganador:''})
    }

        render() {
        
        return (
            <div id="ppt">
                <div id='juego'>
                    <Seleccion handleNext={this.handleNext} handlePrev={this.handlePrev} jugador={1} seleccion={this.state.seleccion1} ganadas={this.state.ganadas1}/>
                    <Jugar jugada={this.jugada}/>
                    <Seleccion handleNext={this.handleNext} handlePrev={this.handlePrev} jugador={2} seleccion={this.state.seleccion2} ganadas={this.state.ganadas2} />
                </div>
                <Modal ganador={this.state.ganador} handleReset={this.handleReset}/>
            </div>
        )
    }
}