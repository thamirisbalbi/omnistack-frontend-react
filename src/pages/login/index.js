import React from 'react';

import './styles.css';

import heroesImg from '../../assets/heroes.png';


export default function Login() {
    return (
        <div className= "login-container">
            <section className="form">

            </section>
            <img src={heroesImg} alt="Heroes" /> 
        </div>

    );
}