import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Home.css'

import Termos from '../Termos/Termos';

import Logo from '../../assets/LogoNome.png'

export default () => {
    const navigate = useNavigate();

    const [StrName, SetStrName] = useState('');
    const [StrEmail, SetStrEmail] = useState('');
    const [StrPhone, SetStrPhone] = useState('');
    const [StrID, SetStrID] = useState('')

    const baseUrl = 'https://incor-update.vercel.app';
    // const baseUrl = 'http://localhost:3001';

    const getTeste = async () => {
        const { data } = await axios.get(`${baseUrl}/teste`);
        console.log(data);
    };

    useEffect(() => {
        getTeste()
    }, []);

    /**
     * Precisamos de mais validadores
     * @param {*} e 
     */
    const SetUsers = async (e) => {
        e.preventDefault()

        if (!StrName || !StrEmail || !StrPhone) {
            alert('Preencha os campos!');
            return
        }

        let data = { Nome: StrName, Email: StrEmail, Telefone: StrPhone };
        let { data: NewUser } = await axios.post(`${baseUrl}/setusers`, data);
        SetStrID(`${NewUser.id}`);

        navigate(`/App/${NewUser.id}/${StrName}`);
    }

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

            <div id='Avaliacao' className='BodyHome'>
                <div className='Login'>
                    <span className='LoginLeft'>
                        <span className='SpanInput'>
                            <p>Nome: </p>
                            <input type="text" name="Nome" className="InputLogin" placeholder='Seu Nome Completo'
                                value={StrName} onChange={(e) => { SetStrName(e.target.value) }} />
                        </span>
                        <span className='SpanInput'>
                            <p>Email: </p>
                            <input type="email" name="Email" className="InputLogin" placeholder='Seu E-mail'
                                value={StrEmail} onChange={(e) => { SetStrEmail(e.target.value) }} />
                        </span>
                        <span className='SpanInput'>
                            <p>Contato: </p>
                            <input type="tel" name="Contato" className="InputLogin" placeholder='Seu numero de telefone'
                                value={StrPhone} onChange={(e) => { SetStrPhone(e.target.value) }} />
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
                        <Link to={`/App/${StrID}`} className='LinkButton' onClick={(e) => { SetUsers(e) }}>
                            <button className='EntraButton' >Entrar</button>
                        </Link>
                    </span>
                    <span className='Separator'></span>
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
                    <Link to={'/Apresentacao'} > <i className="fas fa-laptop-code"></i> </Link>
                </div>
                <p>Copyright By <a href='https://bruhkamargo.github.io/HealthTec'><span className='Health'>Health</span>&<span className='Tec'>Tec</span></a></p>
            </footer >
        </>
    )
}