import React from 'react';

import './styles.css';

export default function NewIncident() {
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

                <form>
                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder= "WhatsApp" /> 

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style= {{ width: 80 }} />  
                    </div>

                    <button className="button" type="submit" >Cadastrar</button>
                </form>
            </div>
        </div>
    );
}