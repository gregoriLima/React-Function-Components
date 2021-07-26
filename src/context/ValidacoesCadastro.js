import React from 'react';

//
function semValidacao(dados) { // valor padrão para o contexto. para caso não haja um context Provider, utiliza estes dados como padrão...
  console.log(dados);
  return { valido: true, texto: '' };
}

const ValidacoesCadastro = React.createContext(
  {
    cpf: semValidacao,
    senha: semValidacao,
    nome: semValidacao,
  },
);

export default ValidacoesCadastro;
