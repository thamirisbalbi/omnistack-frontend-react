import React, { useState } from 'react';
import { Link } from  'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'; 

import './styles.css';

import heroesImg from '../../assets/heroes.png';

export default function NewIncident() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [value,setValue] = useState('');

    const ongId = localStorage.getItem('ongId'); //traz para storage local o id da ong para poder ser usado em header authorization na aplicação dentro de try 

    async function handleNewIncident(e) {
        e.preventDefault(); //previne comportamento padrão do formulário

        const data = {
            title,
            description,
            value,
        };
        try {
            await api.post('incidents', data, { //passando a rota, data, e a header authorization 
                headers: {
                    Authorization: ongId,
                }
            })
        } catch (err) {
            alert('Erro ao cadastrar caso. Tente novamente.');
        }

    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={heroesImg} alt="Be The Hero" width="130" height="130"/> 

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link> 
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit" >Cadastrar</button>
                </form>
            </div>
        </div>
    );
}