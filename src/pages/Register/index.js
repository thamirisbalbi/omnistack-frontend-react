import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

    function handleRegister(e) { //'e' seria o evento do formulário
        e.preventDefault(); //previne o comportamento padrão do formulário 
        
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        }; //tira o console log e deixa apenas o objeto javascript
    
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