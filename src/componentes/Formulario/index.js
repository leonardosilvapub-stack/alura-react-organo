import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSupensa"
import './Formulario.css'

const Formulario = (props) => {

    // const times = [
    //     'Programação',
    //     'Front-End',
    //     'Data Science',
    //     'Devops',
    //     'UX e Design',
    //     'Mobile',
    //     'Inova'
    // ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        //console.log('Form foi submetido => ', nome, cargo, imagem, time)
        props.aoColaboradorCadastrado ({
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
        <section className="formulario"> 
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto obrigatorio={true} label="Nome" 
            valor={nome} aoAlterado={(valor) => setNome(valor)}/>      
            <CampoTexto obrigatorio={true} label="Cargo"
            valor={cargo} aoAlterado={(valor) => setCargo(valor)}/>
            <CampoTexto obrigatorio={true} label="Imagem" 
            valor={imagem} aoAlterado={(valor) => setImagem(valor)} customPlaceholder="Digite o endereço da sua Imagem..."/>      
            <ListaSuspensa 
            obrigatorio={true}
            label="Time" 
            itens={props.times}
            valor={time}
            aoAlterado={(valor) => setTime(valor)} />
            <Botao texto="Criar Card" />
        </form>
    </section>
    )
}

export default Formulario