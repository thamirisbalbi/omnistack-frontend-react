import React from 'react';

import Login from './pages/Login'; //quando selecionamos uma pasta, automaticamente o sistema procura o arquivo index de dentro

function App() {
  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment }>Incrementar</button>
    </div>
  );
}

export default App;
