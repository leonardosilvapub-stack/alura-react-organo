import './Campo.css'

const Campo = ({type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false}) => {
    const placeholderCampo = (placeholder) ? placeholder : `Digite o seu ${label}...`;
    // let valor = 'Leonardo'
    //const [valor, setValor] = useState('Leo')
    
    const aoDigitado = (event) => {
        aoAlterado(event.target.value)
        //console.log(valor)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input type={type} value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderCampo}/>
        </div>        
    )
} 

export default Campo