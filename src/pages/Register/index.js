import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; //importa ícone do feather icons

import api from '../../services/api';
import './styles.css';

import heroesImg from '../../assets/heroes.png';

export default function Register() {
    const [name, setName] = useState(''); //sintaxe: valor, função para atualizar o valor
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory(); //history serve para navegação através de função JavaScript, quando não é possível colocar o Link do react router dom

    async function handleRegister(e) { //'e' seria o evento do formulário
        e.preventDefault(); //previne o comportamento padrão do formulário 
        
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        }; //tira o console log e deixa apenas o objeto javascript
        try {
            const response = await api.post('ongs', data); //envia ao usuário mensagem de acordo com a resposta que o api manda para a aplicação, utilizando o método await e async para esperar a função acabar de executar para o envio. 
            //dentro de response terá o id que o api retorna. 

            alert(`Seu ID de acesso: ${response.data.id}`); //envia mensagem ao usuário acessando seu ID, caso tenha dado certo 
            history.push('/'); //envia o usuário de volta para a rota principal
        }
           catch(err) {
            alert(`Erro no cadastro. Tente novamente.`); //em caso de erro no cadastro
            }
        
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={heroesImg} alt="Be The Hero" width="130" height="130"/> 

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link> 
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e =>  setName(e.target.value)} //arrow function 
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder= "WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    /> 

                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            style= {{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />  
                    </div>

                    <button className="button" type="submit" >Cadastrar</button>
                </form>
            </div>
        </div>
    );
}