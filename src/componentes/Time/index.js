import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';


const Time = ({time, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {
    const css = { backgroundImage:'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.5') }
    return (
        (colaboradores.length > 0) ? <section className='time' style={css}>
            <input onChange={evento => mudarCor(evento.target.value, time.id) } value={time.cor} type='color' className='input-cor' />
            <h3 style={{borderColor: time.cor}}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( (colaborador, indice) => { 
                    return (
                        <Colaborador 
                            key={indice} 
                            corDeFundo={time.cor} 
                            colaborador={colaborador} 
                            aoDeletar={aoDeletar} 
                            aoFavoritar={aoFavoritar} 
                        /> 
                    );
                })}
            </div>
        </section>
        : <section className='time' style={css}>
            <h3 style={{borderColor: time.cor}}>{time.nome}</h3>
            <div className='colaboradores'>
                <Colaborador colaborador={{nome:'Vaga em Aberto', cargo:"Trabalhe Conosco", imagem:"https://i.redd.it/wpe4viwd5uha1.png"}} />
            </div>
        </section>
        
    )
}

export default Time 