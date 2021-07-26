/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import 'fontsource-roboto';
import { validarCPF, validarSenha } from './models/regrasValidacao'; // regras de validações definidas no modelo de negócio (pasta models)
import ValidacoesCadastro from './context/ValidacoesCadastro';

function aoEnviarForm(dados) {
  console.log(dados);
}

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>

        <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha }}>

          <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{ cpf: validarCPF, senha: validarSenha }} />

        </ValidacoesCadastro.Provider>

      </Container>
    );
  }
}

export default App;
