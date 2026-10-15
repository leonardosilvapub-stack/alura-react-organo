import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderCampo = (props.customPlaceholder) ? props.customPlaceholder : `Digite o seu ${props.label}...`;
    // let valor = 'Leonardo'
    //const [valor, setValor] = useState('Leo')
    
    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
        //console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderCampo}/>
        </div>        
    )
} 

export default CampoTexto