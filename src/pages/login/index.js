import React from 'react';

import './styles.css';

import logoImg from '../../assets/logo.png'
import heroesImg from '../../assets/heroes.png';


export default function Login() {
    return (
        <div className= "login-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
            </section>

            <img src={heroesImg} alt="Heroes" /> 
        </div>

    );
}