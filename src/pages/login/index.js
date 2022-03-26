import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import {FiLogIn} from 'react-icons/fi' //chaves para desestruturar o que se deseja pegar 
//FiLogIn é usado como um componente

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png'
import heroesImg from '../../assets/heroes.png';


export default function Login() {
    return (
        <div className= "login-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" width="300" height="200"/>
            
            <form>
                <h1>Faça seu login</h1>

                <input placeholder="Sua ID" />
                <button className='button' type="submit">Entrar</button>
                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041" />
                    Não tenho cadastro
                </Link> 
            </form> 
            
            </section>

            <img src={heroesImg} alt="Heroes" width="400" height="400"/> 
        </div>

    );
}