import { useState } from 'react'
import './CampoTexto.css'
    
const CampoTexto = (props) => {
    //console.log(props)
    const placeholdermodificada = `${props.placehorder}...`
    
    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value)
    }
    return (
            <div className="campo-texto">
                <label>{props.label}</label>
                <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholdermodificada}/>
            </div>
    )
}
export default CampoTexto