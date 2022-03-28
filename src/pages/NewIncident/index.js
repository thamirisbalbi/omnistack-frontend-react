import React, { useState } from 'react';
import { Link } from  'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import heroesImg from '../../assets/heroes.png';

export default function NewIncident() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [value,setValue] = useState('');



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

                <form>
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