import { useEffect, useState } from 'react';

import Grafico from './Grafico'

import './Presentation.css'

import LogoNome from "../../assets/LogoNome.png"

export default () => {
    const [Results, SetResults] = useState(false)

    return (
        <div id="Presentation" style={{backgroundImage:`url(${LogoNome})`}}>
            {Results ?
                <div className='DivGrafico'>
                    <h1>Resultados!</h1>
                    <Grafico />
                </div>
                :
                <div className='LoginPresentation'>
                    <span>
                        <p>Login: </p>
                        <input type="text" className="InputPresentation" id="" />
                    </span>
                    <span>
                        <p>Senha: </p>
                        <input type="password" className="InputPresentation" id="" />
                    </span>
                    <span>
                        <p>Ver a senha: <input type="checkbox" name="" id="" /></p>
                    </span>
                    <button className='ButtonPresentation' onClick={() => { SetResults(true) }}>Login</button>
                </div>}
        </div>
    )
}
