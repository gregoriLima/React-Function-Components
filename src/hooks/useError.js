/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useState } from 'react';

// esse hook é utilizado para extrair dependências dos elementos, como o possoEnviar

function criarEstadoInicial(regrasValidacao) {
  const estadoInicial = {};

  // para cada chave nas regras de validação, cria um estado inicial
  // neste caso cria o seguinte estado inicial:
  // cpf: {valido: true, texto: ""}
  // senha: {valido: true, texto: ""}
  for (const key in regrasValidacao) {
    estadoInicial[key] = { valido: true, texto: '' };
  }

  return estadoInicial;
}

function useErros(regrasValidacao) {
  const estadoInicial = criarEstadoInicial(regrasValidacao);
  const [erros, setErros] = useState(estadoInicial);

  // função validar campos, que é executada a cada vez que o input perde o foco
  function validarCampos(event) {
    const { name, value } = event.target; // descontrução para pegar o nome do campo e o seu valor

    // lógicas de validação que podem variar de componente para componente
    // pois isso o componente ao acessar esse hook deve passar suas regras de validações por parâmetro
    const ehValido = regrasValidacao[name](value);

    const novoEstado = { ...erros, [name]: ehValido };
    setErros(novoEstado);
  }

  // função posso enviar que é chamada quando há o onSubmit de cada formulário
  function possoEnviar() {
    const posso = true;
    for (const campo in erros) {
      if (!erros[campo].valido) return false;
    }
    return posso;
  }

  return [erros, validarCampos, possoEnviar];
}

export default useErros;
