import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto/'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = (props) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form submetido')
        console.log('Nome: ', nome)
        console.log('Cargo: ', cargo)
        console.log('Imagem: ', imagem)
        console.log('Time: ', time)
        props.aoColaboradorCadastrar({
            nome,
            cargo, 
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placehorder="Digite seu nome"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placehorder="Digite seu cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}    
                />
                <CampoTexto 
                    label="Imagem"
                    placehorder="Digite o endereço de sua imagem"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}    
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao texto="Criar card">
                    Criar card children
                </Botao>
            </form>
        </section>
    )
}

export default Formulario