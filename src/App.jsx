import { useState } from 'react'

import Logo from './assets/LogoNome.png'
import './App.css'

function App() {
  const [Question01, SetQuestion01] = useState(null)
  const [Question02, SetQuestion02] = useState(null)
  const [Question03, SetQuestion03] = useState(null)
  const [Question04, SetQuestion04] = useState(null)
  const [Question05, SetQuestion05] = useState(null)
  const [Question06, SetQuestion06] = useState('____')
  const [Question07, SetQuestion07] = useState(null)
  const [Question08, SetQuestion08] = useState('____')
  const [Question09, SetQuestion09] = useState(null)
  const [Question10, SetQuestion10] = useState(null)
  const [Question11, SetQuestion11] = useState(null)
  const [Question12, SetQuestion12] = useState(null)
  const [Question13, SetQuestion13] = useState(null)
  const [Question14, SetQuestion14] = useState(null)

  const [StrName, SetStrName] = useState('')
  const [StrDate, SetStrDate] = useState('')

  return (
    <>
      <header id='Home'>
        <span className='SpanLogo'>
          <img src={Logo} alt="" />
        </span>
        <nav>
          <ul className='TopMenu'>
            <li><a href='#Home'> Início </a></li>
            <li><a href='#Avaliacao'> Avaliação </a></li>
            <li><a href='#Resultados'> Resultados </a></li>
            <li><a href='#Contato'> Contato </a></li>
          </ul>
        </nav>
      </header>

      <div id='Avaliacao' className='DivBody' >
        <div className='EstiloDeVida'>
          <h2>Questionario de Avaliação do Estilo de Vida para Adultos com Doenças Cardiovasculares</h2>
          <span><h4><span>Instruções:</span> Selecionea alternativa que melhor descreve o seu comportamento ou situação no último mês.</h4></span>

          {/*Atividade Física*/}
          {/*Pergunta 1*/}
          <div className='Card'>
            <h2 style={{ color: "white" }}>Atividade Física</h2>
            <div className='Dominios'>
              <div className='Pergunta'>
                <p>Pratico mais de 150 minutos de atividade fisica moderada a vigorosa por semana.</p>
                <p>Ex.: Andar rapidamente, correr, dançar, nadar, pedalar, entre outras atividade de intensidade equivalente.</p>
              </div>

              <div className='Escala'>
                <div>
                  <p>Nunca</p>
                  <input
                    type="radio"
                    value={0}
                    checked={Question01 === 0}
                    onChange={() => { SetQuestion01(0) }}
                  />
                </div>
                <div>
                  <p> Raramente</p>
                  <input
                    type="radio"
                    value={1}
                    checked={Question01 === 1}
                    onChange={() => { SetQuestion01(1) }}
                  />
                </div>
                <div>
                  <p>Algumas Vezes</p>
                  <input
                    type="radio"
                    value={2}
                    checked={Question01 === 2}
                    onChange={() => { SetQuestion01(2) }}
                  />
                </div>
                <div>
                  <p>Frequentemente</p>
                  <input
                    type="radio"
                    value={3}
                    checked={Question01 === 3}
                    onChange={() => { SetQuestion01(3) }}
                  />
                </div>
                <div>
                  <p>Sempre</p>
                  <input
                    type="radio"
                    value={4}
                    checked={Question01 === 4}
                    onChange={() => { SetQuestion01(4) }}
                  />
                </div>
              </div>
            </div>

            {/*Pergunta 2*/}
            <div className='Dominios'>
              <div className='Pergunta'>
                <p>Pratico atividades de fortaleciemtno muscular pelo menos 2 dias na semana.</p>
                <p>Ex.: Musculação, Treinamento Funcional, Pilates, Entre outras atividade equivalentes.</p>
              </div>

              <div className='Escala'>
                <div>
                  <p>Nunca</p>
                  <input
                    type="radio"
                    value={0}
                    checked={Question02 === 0}
                    onChange={() => { SetQuestion02(0) }}
                  />
                </div>
                <div>
                  <p> Raramente</p>
                  <input
                    type="radio"
                    value={1}
                    checked={Question02 === 1}
                    onChange={() => { SetQuestion02(1) }}
                  />
                </div>
                <div>
                  <p>Algumas Vezes</p>
                  <input
                    type="radio"
                    value={2}
                    checked={Question02 === 2}
                    onChange={() => { SetQuestion02(2) }}
                  />
                </div>
                <div>
                  <p>Frequentemente</p>
                  <input
                    type="radio"
                    value={3}
                    checked={Question02 === 3}
                    onChange={() => { SetQuestion02(3) }}
                  />
                </div>
                <div>
                  <p>Sempre</p>
                  <input
                    type="radio"
                    value={4}
                    checked={Question02 === 4}
                    onChange={() => { SetQuestion02(4) }}
                  />
                </div>
              </div>
            </div>

            {/*Pergunta 3*/}
            <div className='Dominios'>
              <div className='Pergunta'>
                <p>No dia a dia, procuro ser ativo nos meus momentos de lazer e demais afazeres.</p>
                <p>Ex.: Atividades domésticas, Passeio com cachorro, Deslocamento a pé, escadas, Entre outras atividade equivalentes.</p>
              </div>

              <div className='Escala'>
                <div>
                  <p>Nunca</p>
                  <input
                    type="radio"
                    value={0}
                    checked={Question03 === 0}
                    onChange={() => { SetQuestion03(0) }}
                  />
                </div>
                <div>
                  <p> Raramente</p>
                  <input
                    type="radio"
                    value={1}
                    checked={Question03 === 1}
                    onChange={() => { SetQuestion03(1) }}
                  />
                </div>
                <div>
                  <p>Algumas Vezes</p>
                  <input
                    type="radio"
                    value={2}
                    checked={Question03 === 2}
                    onChange={() => { SetQuestion03(2) }}
                  />
                </div>
                <div>
                  <p>Frequentemente</p>
                  <input
                    type="radio"
                    value={3}
                    checked={Question03 === 3}
                    onChange={() => { SetQuestion03(3) }}
                  />
                </div>
                <div>
                  <p>Sempre</p>
                  <input
                    type="radio"
                    value={4}
                    checked={Question03 === 4}
                    onChange={() => { SetQuestion03(4) }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/*Nutrição*/}
          {/*Pergunta 4*/}
          <div className='Card'>
            <h2 style={{ color: "white" }}>Nutrição</h2>
            <div className='Dominios'>
              <div className='Pergunta'>
                <p>Consumo pelo menos 5 porções* de frutas ou legumes e verduras ao dia.</p>
                <p>*1 porção padrão = aproximadamente 80g ou 1 xicara</p>
              </div>

              <div className='Escala'>
                <div>
                  <p>Nunca</p>
                  <input
                    type="radio"
                    value={0}
                    checked={Question04 === 0}
                    onChange={() => { SetQuestion04(0) }}
                  />
                </div>
                <div>
                  <p> Raramente</p>
                  <input
                    type="radio"
                    value={1}
                    checked={Question04 === 1}
                    onChange={() => { SetQuestion04(1) }}
                  />
                </div>
                <div>
                  <p>Algumas Vezes</p>
                  <input
                    type="radio"
                    value={2}
                    checked={Question04 === 2}
                    onChange={() => { SetQuestion04(2) }}
                  />
                </div>
                <div>
                  <p>Frequentemente</p>
                  <input
                    type="radio"
                    value={3}
                    checked={Question04 === 3}
                    onChange={() => { SetQuestion04(3) }}
                  />
                </div>
                <div>
                  <p>Sempre</p>
                  <input
                    type="radio"
                    value={4}
                    checked={Question04 === 4}
                    onChange={() => { SetQuestion04(4) }}
                  />
                </div>
              </div>
            </div>

            {/*Pergunta 5*/}
            <div className='Dominios'>
              <div className='Pergunta'>
                <p>Evito consumir <span title='Presunto, Mortadela, Salsicha, Salame...'>carnes processadas </span>, frituras, bebidas adoçadas, molhos e temperos prontos, <span title='Salgadinhos, Bolachas Recheadas'>lanches industrializados</span>.</p>
                <p></p>
              </div>

              <div className='Escala'>
                <div>
                  <p>Nunca</p>
                  <input
                    type="radio"
                    value={0}
                    checked={Question05 === 0}
                    onChange={() => { SetQuestion05(0) }}
                  />
                </div>
                <div>
                  <p> Raramente</p>
                  <input
                    type="radio"
                    value={1}
                    checked={Question05 === 1}
                    onChange={() => { SetQuestion05(1) }}
                  />
                </div>
                <div>
                  <p>Algumas Vezes</p>
                  <input
                    type="radio"
                    value={2}
                    checked={Question05 === 2}
                    onChange={() => { SetQuestion05(2) }}
                  />
                </div>
                <div>
                  <p>Frequentemente</p>
                  <input
                    type="radio"
                    value={3}
                    checked={Question05 === 3}
                    onChange={() => { SetQuestion05(3) }}
                  />
                </div>
                <div>
                  <p>Sempre</p>
                  <input
                    type="radio"
                    value={4}
                    checked={Question05 === 4}
                    onChange={() => { SetQuestion05(4) }}
                  />
                </div>
              </div>
            </div>

            {/*Pergunta 6*/}
            <div className='Dominios'>
              <div className='Pergunta'>
                <p>Preciso perder ou ganhar <span>{Question06}</span> quilos para me aproximar do peso que considero saudável.</p>
                <p></p>
              </div>

              <div className='Escala'>
                <div>
                  <p>Mais de 8Kg</p>
                  <input
                    type="radio"
                    value='Mais de 8Kg'
                    checked={Question06 === 'Mais de 8Kg'}
                    onChange={() => { SetQuestion06('Mais de 8Kg') }}
                  />
                </div>
                <div>
                  <p>6 - 8 Kg</p>
                  <input
                    type="radio"
                    value='6 - 8 Kg'
                    checked={Question06 === '6 - 8 Kg'}
                    onChange={() => { SetQuestion06('6 - 8 Kg') }}
                  />
                </div>
                <div>
                  <p>4 - 6 Kg</p>
                  <input
                    type="radio"
                    value='4 - 6 Kg'
                    checked={Question06 === '4 - 6 Kg'}
                    onChange={() => { SetQuestion06('4 - 6 Kg') }}
                  />
                </div>
                <div>
                  <p>2 - 4 Kg</p>
                  <input
                    type="radio"
                    value='2 - 4 Kg'
                    checked={Question06 === '2 - 4 Kg'}
                    onChange={() => { SetQuestion06('2 - 4 Kg') }}
                  />
                </div>
                <div>
                  <p>0 - 2 Kg</p>
                  <input
                    type="radio"
                    value='0 - 2 Kg'
                    checked={Question06 === '0 - 2 Kg'}
                    onChange={() => { SetQuestion06('0 - 2 Kg') }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/*Alcool e Tabaco*/}
          {/*Pergunta 7*/}
          <div className='Card'>
            <h2 style={{ color: "white" }}>Alcool e Tabaco</h2>
            <div className='Dominios'>
              <div className='Pergunta'>
                <p>Eu fumo cigarros, dispositivos eletrônicos com nicotina ou narguilé.</p>
                <p></p>
              </div>

              <div className='Escala'>
                <div>
                  <p>Mais de 10 por dia</p>
                  <input
                    type="radio"
                    value='Mais de 10 por dia'
                    checked={Question07 === 'Mais de 10 por dia'}
                    onChange={() => { SetQuestion07('Mais de 10 por dia') }}
                  />
                </div>
                <div>
                  <p>1 a 10 por dia</p>
                  <input
                    type="radio"
                    value='1 a 10 por dia'
                    checked={Question07 === '1 a 10 por dia'}
                    onChange={() => { SetQuestion07('1 a 10 por dia') }}
                  />
                </div>
                <div>
                  <p>Nenhum nos últimos 6 meses</p>
                  <input
                    type="radio"
                    value='Nenhum nos ultimos 6 meses'
                    checked={Question07 === 'Nenhum nos ultimos 6 meses'}
                    onChange={() => { SetQuestion07('Nenhum nos ultimos 6 meses') }}
                  />
                </div>
                <div>
                  <p>Nenhum no último ano</p>
                  <input
                    type="radio"
                    value='Nenhum nos ultimos 6 meses'
                    checked={Question07 === 'Nenhum nos ultimos 6 meses'}
                    onChange={() => { SetQuestion07('Nenhum nos ultimos 6 meses') }}
                  />
                </div>
                <div>
                  <p>Nenhum nos últimos 5 anos ou mais</p>
                  <input
                    type="radio"
                    value='Nenhum nos últimos 5 anos ou mais'
                    checked={Question07 === 'Nenhum nos últimos 5 anos ou mais'}
                    onChange={() => { SetQuestion07('Nenhum nos últimos 5 anos ou mais') }}
                  />
                </div>
              </div>
            </div>

            {/*Pergunta 8*/}
            <div className='Dominios'>
              <div className='Pergunta'>
                <p>A minha ingestão média por semanda de álcool é: <span>{Question08}</span> doses.</p>
                <p>Ex.: 1 dose = 1 lata de cerveja ou 1 taça de vinho (142ml) ou 1 dose de destilado (42ml).</p>
              </div>

              <div className='Escala'>
                <div>
                  <p>Mais de 20</p>
                  <input
                    type="radio"
                    value='Mais de 20'
                    checked={Question08 === 'Mais de 20'}
                    onChange={() => { SetQuestion08('Mais de 20') }}
                  />
                </div>
                <div>
                  <p>13 - 20</p>
                  <input
                    type="radio"
                    value='13 - 20'
                    checked={Question08 === '13 - 20'}
                    onChange={() => { SetQuestion08('13 - 20') }}
                  />
                </div>
                <div>
                  <p>11 - 12</p>
                  <input
                    type="radio"
                    value='11 - 12'
                    checked={Question08 === '11 - 12'}
                    onChange={() => { SetQuestion08('11 - 12') }}
                  />
                </div>
                <div>
                  <p>8 - 10</p>
                  <input
                    type="radio"
                    value='8 - 10'
                    checked={Question08 === '8 - 10'}
                    onChange={() => { SetQuestion08('8 - 10') }}
                  />
                </div>
                <div>
                  <p>0 - 7</p>
                  <input
                    type="radio"
                    value='0 - 7'
                    checked={Question08 === '0 - 7'}
                    onChange={() => { SetQuestion08('0 - 7') }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/*Sono*/}
          {/*Pergunta 9*/}
          <div className='Card'>
            <h2 style={{ color: "white" }}>Sono</h2>
            <div className='Dominios'>
              <div className='Pergunta'>
                <p>Durmo bem e me sinto descansado.</p>
                <p> </p>
              </div>

              <div className='Escala'>
                <div>
                  <p>Nunca</p>
                  <input
                    type="radio"
                    value={0}
                    checked={Question09 === 0}
                    onChange={() => { SetQuestion09(0) }}
                  />
                </div>
                <div>
                  <p> Raramente</p>
                  <input
                    type="radio"
                    value={1}
                    checked={Question09 === 1}
                    onChange={() => { SetQuestion09(1) }}
                  />
                </div>
                <div>
                  <p>Algumas Vezes</p>
                  <input
                    type="radio"
                    value={2}
                    checked={Question09 === 2}
                    onChange={() => { SetQuestion09(2) }}
                  />
                </div>
                <div>
                  <p>Frequentemente</p>
                  <input
                    type="radio"
                    value={3}
                    checked={Question09 === 3}
                    onChange={() => { SetQuestion09(3) }}
                  />
                </div>
                <div>
                  <p>Sempre</p>
                  <input
                    type="radio"
                    value={4}
                    checked={Question09 === 4}
                    onChange={() => { SetQuestion09(4) }}
                  />
                </div>
              </div>
            </div>

            {/*Pergunta 10*/}
            <div className='Dominios'>
              <div className='Pergunta'>
                <p>Durmo bem entre 7 e 9 horas por noite.</p>
                <p> </p>
              </div>

              <div className='Escala'>
                <div>
                  <p>Nunca</p>
                  <input
                    type="radio"
                    value={0}
                    checked={Question10 === 0}
                    onChange={() => { SetQuestion10(0) }}
                  />
                </div>
                <div>
                  <p> Raramente</p>
                  <input
                    type="radio"
                    value={1}
                    checked={Question10 === 1}
                    onChange={() => { SetQuestion10(1) }}
                  />
                </div>
                <div>
                  <p>Algumas Vezes</p>
                  <input
                    type="radio"
                    value={2}
                    checked={Question10 === 2}
                    onChange={() => { SetQuestion10(2) }}
                  />
                </div>
                <div>
                  <p>Frequentemente</p>
                  <input
                    type="radio"
                    value={3}
                    checked={Question10 === 3}
                    onChange={() => { SetQuestion10(3) }}
                  />
                </div>
                <div>
                  <p>Sempre</p>
                  <input
                    type="radio"
                    value={4}
                    checked={Question10 === 4}
                    onChange={() => { SetQuestion10(4) }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/*Estresse*/}
          {/*Pergunta 11*/}
          <div className='Card'>
            <h2 style={{ color: "white" }}>Estresse</h2>
            <div className='Dominios'>
              <div className='Pergunta'>
                <p>Reservo ao menos 5 minutos todo dia para relaxar.</p>
                <p>Ex.: Ouvir música, respiração lenta, meditação, oração, Entre outras atividade equivalentes.</p>
              </div>

              <div className='Escala'>
                <div>
                  <p>Nunca</p>
                  <input
                    type="radio"
                    value={0}
                    checked={Question11 === 0}
                    onChange={() => { SetQuestion11(0) }}
                  />
                </div>
                <div>
                  <p> Raramente</p>
                  <input
                    type="radio"
                    value={1}
                    checked={Question11 === 1}
                    onChange={() => { SetQuestion11(1) }}
                  />
                </div>
                <div>
                  <p>Algumas Vezes</p>
                  <input
                    type="radio"
                    value={2}
                    checked={Question11 === 2}
                    onChange={() => { SetQuestion11(2) }}
                  />
                </div>
                <div>
                  <p>Frequentemente</p>
                  <input
                    type="radio"
                    value={3}
                    checked={Question11 === 3}
                    onChange={() => { SetQuestion11(3) }}
                  />
                </div>
                <div>
                  <p>Sempre</p>
                  <input
                    type="radio"
                    value={4}
                    checked={Question11 === 4}
                    onChange={() => { SetQuestion11(4) }}
                  />
                </div>
              </div>
            </div>

            {/*Pergunta 12*/}
            <div className='Dominios'>
              <div className='Pergunta'>
                <p>Consigo equilibrar meu tempo de trabalho com o de lazer</p>
                <p> </p>
              </div>

              <div className='Escala'>
                <div>
                  <p>Nunca</p>
                  <input
                    type="radio"
                    value={0}
                    checked={Question12 === 0}
                    onChange={() => { SetQuestion12(0) }}
                  />
                </div>
                <div>
                  <p> Raramente</p>
                  <input
                    type="radio"
                    value={1}
                    checked={Question12 === 1}
                    onChange={() => { SetQuestion12(1) }}
                  />
                </div>
                <div>
                  <p>Algumas Vezes</p>
                  <input
                    type="radio"
                    value={2}
                    checked={Question12 === 2}
                    onChange={() => { SetQuestion12(2) }}
                  />
                </div>
                <div>
                  <p>Frequentemente</p>
                  <input
                    type="radio"
                    value={3}
                    checked={Question12 === 3}
                    onChange={() => { SetQuestion12(3) }}
                  />
                </div>
                <div>
                  <p>Sempre</p>
                  <input
                    type="radio"
                    value={4}
                    checked={Question12 === 4}
                    onChange={() => { SetQuestion12(4) }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/*Relacionamentos*/}
          {/*Pergunta 13*/}
          <div className='Card'>
            <h2 style={{ color: "white" }}>Relacionamentos</h2>
            <div className='Dominios'>
              <div className='Pergunta'>
                <p>Procuro cultivar amizades e estou satisfeito com meus relacionamentos.</p>
                <p> </p>
              </div>

              <div className='Escala'>
                <div>
                  <p>Nunca</p>
                  <input
                    type="radio"
                    value={0}
                    checked={Question13 === 0}
                    onChange={() => { SetQuestion13(0) }}
                  />
                </div>
                <div>
                  <p> Raramente</p>
                  <input
                    type="radio"
                    value={1}
                    checked={Question13 === 1}
                    onChange={() => { SetQuestion13(1) }}
                  />
                </div>
                <div>
                  <p>Algumas Vezes</p>
                  <input
                    type="radio"
                    value={2}
                    checked={Question13 === 2}
                    onChange={() => { SetQuestion13(2) }}
                  />
                </div>
                <div>
                  <p>Frequentemente</p>
                  <input
                    type="radio"
                    value={3}
                    checked={Question13 === 3}
                    onChange={() => { SetQuestion13(3) }}
                  />
                </div>
                <div>
                  <p>Sempre</p>
                  <input
                    type="radio"
                    value={4}
                    checked={Question13 === 4}
                    onChange={() => { SetQuestion13(4) }}
                  />
                </div>
              </div>
            </div>

            {/*Pergunta 14*/}
            <div className='Dominios'>
              <div className='Pergunta'>
                <p>Meu lazer inclui reunião com amigos, atividades em grupos, participações em associações ou comunidades religiosas ou espirituais, entre outras atividades equivalentes.</p>
                <p> </p>
              </div>

              <div className='Escala'>
                <div>
                  <p>Nunca</p>
                  <input
                    type="radio"
                    value={0}
                    checked={Question14 === 0}
                    onChange={() => { SetQuestion14(0) }}
                  />
                </div>
                <div>
                  <p> Raramente</p>
                  <input
                    type="radio"
                    value={1}
                    checked={Question14 === 1}
                    onChange={() => { SetQuestion14(1) }}
                  />
                </div>
                <div>
                  <p>Algumas Vezes</p>
                  <input
                    type="radio"
                    value={2}
                    checked={Question14 === 2}
                    onChange={() => { SetQuestion14(2) }}
                  />
                </div>
                <div>
                  <p>Frequentemente</p>
                  <input
                    type="radio"
                    value={3}
                    checked={Question14 === 3}
                    onChange={() => { SetQuestion14(3) }}
                  />
                </div>
                <div>
                  <p>Sempre</p>
                  <input
                    type="radio"
                    value={4}
                    checked={Question14 === 4}
                    onChange={() => { SetQuestion14(4) }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        <div id='Resultados'>
          <div className='Card'>
            <h2 style={{ color: "white" }}>Resultados</h2>
            <span className='SpanCard'>
              <div className='DivResults'>
                <span>
                  <p>Nome:</p>
                  <input type="text" value={StrName} onChange={(e) => { SetStrName(e.target.value) }} className='ResultTextInput'/>
                </span>
                <span>
                  <p>Data:</p>
                  <input type="date" value={StrDate} onChange={(e) => { SetStrDate(e.target.value) }} className='ResultTextInput'/>
                </span>
                <span>
                  <button className='SaveButton'>Salvar</button>
                </span>
              </div>
              <div className='DivResults'>
                <div className='Pontos'>
                  <h3>Estilo de Vida</h3>
                  <p>Máximo: 56</p>
                  <p>Paciente: <span>Total</span></p>
                </div>
                <div className='Graficos'>Grafico</div>
              </div>
              <div className='DivResults'>
                <div className='Pontos'>
                  <h3>Pontuação</h3>
                  <p>Atividade Física: <span>0</span>/12</p>
                  <p>Nutrição: <span>0</span>/12</p>
                  <p>Álcool e Tabaco: <span>0</span>/8</p>
                  <p>Sono: <span>0</span>/8</p>
                  <p>Estresse: <span>0</span>/8</p>
                  <p>Relacionamentos: <span>0</span>/8</p>
                </div>
                <div className='Graficos'>Grafico</div>
              </div>
            </span>
          </div>
        </div>

      </div>

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

export default App
