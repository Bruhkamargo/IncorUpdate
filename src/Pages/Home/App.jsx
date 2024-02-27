import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import './App.css'

import Termos from '../Termos/Termos';

import Logo from '../../assets/LogoNome.png'

export default () => {
    const baseUrl = 'https://incor-update.vercel.app';
    // const baseUrl = 'http://localhost:3001';

    const getTeste = async () => {
        const { data } = await axios.get(`${baseUrl}/teste`);
        console.log(data);
    };

    useEffect(() => {
        getTeste()
    }, []);

    const [ModalTermos, SetModalTermos] = useState(false);

    const ChangeModalTermos = () => {
        SetModalTermos(!ModalTermos)
    }

    return (
        <>
            <header>
                <span className='SpanLogo'>
                    <img src={Logo} alt="" />
                </span>
                <nav>
                    <ul className='TopMenu'>
                        <li><a href='#Home'> Início </a></li>
                        <li><a href='#Avaliacao'> Teste </a></li>
                        <li><a href='#Contato'> Contato </a></li>
                    </ul>
                </nav>

            </header>

            <div id='Teste' className='BodyHome'>
                <div className='Login'>
                    <span className='LoginLeft'>
                        <span className='SpanInput'>
                            <p>Nome: </p>
                            <input type="text" name="Nome" className="InputLogin" />
                        </span>
                        <span className='SpanInput'>
                            <p>Email: </p>
                            <input type="email" name="Email" className="InputLogin" />
                        </span>
                        <span className='SpanInput'>
                            <p>Contato: </p>
                            <input type="tel" name="Contato" className="InputLogin" />
                        </span>

                        <span className='CheckSpan'>
                            <span>
                                <label>Concordo com os <span className='LinkTermos' onClick={() => { SetModalTermos(true) }}>termos</span>: </label>
                                <input type='checkbox'></input>
                            </span>
                            <span>
                                <label>Receber emails: </label>
                                <input type='checkbox'></input>
                            </span>
                        </span>
                        <Link to={'/App'} className='LinkButton'>
                            <button className='EntraButton'>Entrar</button>
                        </Link>
                    </span>
                    <span className='LoginRight'>
                        <h2>Título</h2>
                        <p>Texto explicativo da proposta</p>
                    </span>
                </div>
            </div>

            {ModalTermos ? <Termos ChangeModalTermos={ChangeModalTermos} /> : <></>}


            <footer id='Contato'>
                <div className="frase">
                    <p>O essencial é invisível aos olhos.</p>
                    <p>Antoine de Saint-Exupéry</p>
                </div>

                <div className="social">
                    <a href="https://www.instagram.com/reab.incor_update/"> <i className="fab fa-instagram"></i> </a>
                    <a href="https://github.com/Bruhkamargo"> <i className="fab fa-github"></i> </a>
                    <a href="https://wa.me/5549998193608"> <i className="fab fa-whatsapp"></i> </a>
                </div>
                <p>Copyright By <a href='https://bruhkamargo.github.io/HealthTec'><span className='Health'>Health</span>&<span className='Tec'>Tec</span></a></p>
            </footer>
        </>
    )
}