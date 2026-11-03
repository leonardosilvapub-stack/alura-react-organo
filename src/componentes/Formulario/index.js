import { useState } from "react"
import Botao from "../Botao"
import Campo from "../Campo"
import ListaSuspensa from "../ListaSupensa"
import './Formulario.css'

const Formulario = ({aoColaboradorCadastrado, times, cadastrarTime}) => {

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
    const [corTime, setCorTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Form foi submetido => ', nome, cargo, imagem, time)
        aoColaboradorCadastrado ({
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
        <section className="formulario-container"> 
        <form className="formulario" onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <Campo obrigatorio={true} label="Nome" 
            valor={nome} aoAlterado={(valor) => setNome(valor)}/>      
            <Campo obrigatorio={true} label="Cargo"
            valor={cargo} aoAlterado={(valor) => setCargo(valor)}/>
            <Campo obrigatorio={true} label="Imagem" 
            valor={imagem} aoAlterado={(valor) => setImagem(valor)} customPlaceholder="Digite o endereço da sua Imagem..."/>      
            <ListaSuspensa 
            obrigatorio={true}
            label="Time" 
            itens={times}
            valor={time}
            aoAlterado={(valor) => setTime(valor)} />
            <Botao texto="Criar Card" />
        </form>
        <form className="formulario" onSubmit={(event) => {
            event.preventDefault()
            cadastrarTime({ nome: nomeTime, cor: corTime})
        }}>
            <h2>Preencha os dados para criar um novo time.</h2>
            <Campo
                obrigatorio 
                label="Nome" 
                valor={nomeTime} 
                aoAlterado={(valor) => setNomeTime(valor)}
                customPlaceholder="Digite o nome do time"
            />      
            <Campo 
                obrigatorio
                type="color"
                label="Cor"
                valor={corTime}
                aoAlterado={(valor) => setCorTime(valor)}
                customPlaceholder="Digite a cor do time"
            />
            <Botao texto="Criar um novo time" />
        </form>
    </section>
    )
}

export default Formulario