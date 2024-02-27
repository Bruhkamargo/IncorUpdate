import { useEffect } from 'react';

import './Termos.css'

export default ({ ChangeModalTermos }) => {
    useEffect(() => { console.log('termos'); }, [])

    return (
        <div id="Termos" onClick={() => { ChangeModalTermos() }}>
            <div className='ModalTermos' onClick={(e) => e.stopPropagation()}>
                <div className='ModalTermosHead'>
                    <h2>Termos e condições</h2>
                </div>
                <div className='ModalTermosBody'>
                    <h3>Termos de Uso e Política de Privacidade - [Nome do Seu Site]</h3>

                    <p> Última Atualização: [Inserir Data] </p>
                    <p>Bem-vindo ao [Nome do Seu Site]!</p>

                    <p>Ao acessar e utilizar este site, você concorda em cumprir e ficar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, por favor, não use nosso site.</p>

                    <h4>1. Uso do Site:</h4>

                    <p> Você concorda em usar este site apenas para fins legais e de acordo com todas as leis aplicáveis.
                        Você não deve interferir ou tentar interferir na segurança do site, acessar dados não destinados a você ou tentar entrar em áreas restritas do site.
                    </p>
                    <h4>2. Conteúdo do Usuário:</h4>
                    <p> Ao enviar conteúdo para o site, você concede a [Nome da Sua Empresa] uma licença mundial, não exclusiva, irrevogável, transferível e gratuita para usar, reproduzir, modificar, adaptar, distribuir e exibir esse conteúdo.</p>
                    <h4>3. Propriedade Intelectual:</h4>
                    <p>Todo o conteúdo e materiais disponíveis neste site, incluindo, mas não se limitando a textos, gráficos, logotipos, ícones, imagens, áudio e vídeo, são propriedade exclusiva de [Nome da Sua Empresa] ou de seus licenciadores.</p>
                    <h4>4. Links para Outros Sites:</h4>
                    <p>Nosso site pode conter links para sites de terceiros que não são controlados por [Nome da Sua Empresa]. Não nos responsabilizamos pelo conteúdo, políticas de privacidade ou práticas desses sites.</p>
                    <h4>5. Coleta e Uso de Informações Pessoais:</h4>
                    <h5>5.1 Consentimento:</h5>
                    <p>Ao se inscrever em nossa newsletter ou fornecer suas informações de contato, você consente expressamente com a coleta e o uso de seu nome, e-mail e telefone para os seguintes fins:
                        Recebimento de newsletters periódicas.
                        Contato para fins informativos relacionados ao nosso conteúdo.</p>
                    <h5>5.2 Proteção de Dados e Privacidade:</h5>
                    <p>Levamos a sério a proteção de suas informações pessoais. Seus dados serão armazenados de forma segura e não serão compartilhados, vendidos ou alugados a terceiros sem o seu consentimento expresso.</p>
                    <h5>5.3 Cancelamento de Assinatura:</h5>
                    <p>Você tem o direito de cancelar sua assinatura a qualquer momento. Cada e-mail de newsletter incluirá um link fácil para cancelamento de assinatura.</p>
                    <h5>5.4 Segurança:</h5>
                    <p>Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição não autorizada.</p>
                    <h5>5.5 Consentimento:</h5>
                    <p>Ao fornecer suas informações, você consente com a coleta e uso conforme estabelecido nestes Termos de Uso.</p>
                    <h5>5.6 Menores de Idade:</h5>
                    <p>Este site não é destinado a menores de 16 anos, e não coletamos intencionalmente informações pessoais de indivíduos nessa faixa etária.</p>
                    <h4>6. Cookies:</h4>
                    <p>Este site pode utilizar cookies para melhorar a experiência do usuário. Ao continuar a usar o site, você concorda com o uso de cookies.</p>
                    <h4>7. Modificações nos Termos:</h4>

                    <p>Reservamos o direito de modificar estes Termos de Uso e Política de Privacidade a qualquer momento, e tais modificações serão efetivas imediatamente após a publicação. Ao continuar a usar o site após tais modificações, você aceita os Termos de Uso atualizados.</p>
                    <h4>8. Lei Aplicável:</h4>

                    <p>Estes Termos de Uso e Política de Privacidade são regidos e interpretados de acordo com as leis do [Inserir Jurisdição], e você consente com a jurisdição exclusiva dos tribunais dessa jurisdição.
                        Se você tiver alguma dúvida sobre estes Termos de Uso e Política de Privacidade, entre em contato conosco em [Inserir Endereço de Contato].Termos de Uso - Coleta de Informações Pessoais para Newsletter</p>

                    <h4>9. Coleta e Uso de Informações Pessoais:</h4>

                    <p>Ao se inscrever em nossa newsletter ou fornecer suas informações de contato, você concorda expressamente com a coleta e o uso de seu nome, e-mail e telefone para os seguintes fins:
                        Recebimento de newsletters periódicas.
                        Contato para fins informativos relacionados ao nosso conteúdo.
                    </p>
                    <h4>10. Proteção de Dados e Privacidade:</h4>

                    <p>Levamos a sério a proteção de suas informações pessoais. Seus dados serão armazenados de forma segura e não serão compartilhados, vendidos ou alugados a terceiros sem o seu consentimento expresso.</p>
                    <h4>11. Cancelamento de Assinatura:</h4>

                    <p>Você tem o direito de cancelar sua assinatura a qualquer momento. Cada e-mail de newsletter incluirá um link fácil para cancelamento de assinatura.</p>
                    <h4>12. Segurança:</h4>

                    <p>Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição não autorizada.</p>
                    <h4>13. Consentimento:</h4>

                    <p>Ao fornecer suas informações, você consente com a coleta e uso conforme estabelecido nestes Termos de Uso.</p>
                    <h4>14. Menores de Idade:</h4>

                    <p>Este site não é destinado a menores de 16 anos, e não coletamos intencionalmente informações pessoais de indivíduos nessa faixa etária.
                        Ao continuar a usar nosso site e fornecer suas informações, você reconhece ter lido, compreendido e concordado com os termos acima.</p>

                    <p>Para quaisquer dúvidas ou preocupações sobre a coleta de dados, entre em contato conosco em [Inserir Endereço de Contato].</p>

                    <p>Obrigado por escolher [Nome do Seu Site]!</p>
                    <button onClick={() => { ChangeModalTermos() }}>Fechar</button>
                    <button onClick={() => { ChangeModalTermos() }}>Concordar</button>
                </div>
            </div>
        </div >
    )
}