import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option key="Selecione">-- Selecione o time --</option>
                {props.itens.map((item, index) => <option key={index}>{item}</option>)}                
            </select>            
        </div>
    )
}

export default ListaSuspensa;