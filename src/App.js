import React, { useState } from 'react';

import Login from './pages/Login'; //quando selecionamos uma pasta, automaticamente o sistema procura o arquivo index de dentro

function App() {
  const [counter, setCounter] = useState(0); //setCounter é uma função que altera o valor de counter

  //retorna um array[valor, funçãoDeAtualização]

  function increment(){
    setCounter(counter + 1);

    console.log(counter);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment }>Incrementar</button>
    </div>
  );
}

export default App;
