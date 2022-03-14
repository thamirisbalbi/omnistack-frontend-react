import React from 'react';

export default function Header( {children} ) { //export default exporta o componente 
    return (
        <header>
            <h1>{children}</h1>
        </header>

    );
}
//Aqui, a prop tem função de buscar o título definido em App.js para também ser executado no programa
//Para isso, é passado props como parâmetro
