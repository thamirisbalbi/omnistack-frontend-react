import React, { useState, useEffect } from 'react'; 
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Profile() {
    const [incidents, setIncidents] = useState([]); //começa com array vazio, pois está buscando informações do backend e precisa começar com um valor válido (vazio).

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');


    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId, //pegar todos os incidentes, passando a rota profile e a organização que está logada no authorization
            }
        }).then(response => {
            setIncidents(response.data); //response.data é o array que retorna de dentro do api
        }) //pega a resposta e grava os seus dados no estado
    }, [ongId]); //para o React, é útil colocar ongId como dependência, por ser uma variável que se usa no useEffect, caso o Id da ong mude, é possível recalcular o perfil mostrando os incidentes passados, por exemplo.

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });
            setIncidents(incidents.filter(incidents => incidents.id !== id)); //para cada um dos incidentes, manter apenas os com id diferentes do id deletado
        } catch (err) {
            alert('Erro ao deletar caso. Tente novamente.')
        }
    }

    function handleLogout() {
        localStorage.clear(); //remove tudo do local storage.

        history.push('/'); //envia usuário de volta para rota raiz 
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link> 
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul> 
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p> 

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))} 
            </ul>
        </div>
    ); 
}