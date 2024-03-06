import { useEffect, useState } from 'react';
import axios from 'axios';

import Grafico from './Grafico'

import './Presentation.css'

import LogoNome from "../../assets/LogoNome.png"

export default () => {
    const baseUrl = 'https://incor-update.vercel.app';
    // const baseUrl = 'http://192.168.3.50:3001';

    const [Results, SetResults] = useState(false);
    const [Email, SetEmail] = useState('admin@reabincor.com');
    const [Senha, SetSenha] = useState('');
    const [SeePass, SetSeePass] = useState(false);

    /**
         * Precisamos de mais validadores
         * @param {*} e 
         */
    const Autentication = async (e) => {
        e.preventDefault();

        try {
            if (!Email || !Senha) {
                alert('Preencha os campos!');
                return;
            }

            let data = { Email: Email, Senha: Senha };
            let response = await axios.post(`${baseUrl}/authenticate`, data);
            let { success, msg } = response.data;
            // debugger
            if (success == true) {
                SetResults(true);
            } else {
                alert(msg);
                return;
            }
        } catch (error) {
            console.error('Erro na autenticação:', error.message);
        }
    }

    return (
        <div id="Presentation" style={{ backgroundImage: `url(${LogoNome})` }}>
            {Results ?
                <div className='DivGrafico'>
                    <h1>Resultados!</h1>
                    <Grafico />
                </div>
                :
                <div className='LoginPresentation'>
                    <span>
                        <p>Login: </p>
                        <input type="text" className="InputPresentation" value={Email} onChange={(e) => { SetEmail(e.target.value) }} />
                    </span>
                    <span>
                        <p>Senha: </p>
                        <input type={`${SeePass ? "text " : "password"}`} className="InputPresentation" value={Senha} onChange={(e) => { SetSenha(e.target.value) }} />
                    </span>
                    <span>
                        <p>Ver a senha: <input type="checkbox" value={SeePass} onChange={(e) => { SetSeePass(!SeePass) }} /></p>
                    </span>
                    <button className='ButtonPresentation' onClick={(e) => { Autentication(e) }}>Login</button>
                </div>}
        </div>
    )
}
