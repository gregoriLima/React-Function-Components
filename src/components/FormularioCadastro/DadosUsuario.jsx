/* eslint-disable no-restricted-syntax */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import useErros from '../../hooks/useError'; // hook criado

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // ao invés das validacoes virem por propriedades, estão vindo por contexto aqui
  const validacoes = useContext(ValidacoesCadastro);

  const estadoInicial = {};

  // eslint-disable-next-line guard-for-in
  for (const campo in validacoes) {
    estadoInicial[campo] = { valido: true, texto: '' };
  }

  // o hook customizado devolve os erros e a funcao validarCampos
  const [erros, validarCampos, possoEnviar] = useErros(validacoes); // as validações são definidas na pasta models e passada por contexto

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (possoEnviar()) {
        aoEnviar({
          email, senha,
        });
      }
    }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        name="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        name="senha"
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">Continuar</Button>
    </form>
  );
}

DadosUsuario.propTypes = {
  aoEnviar: PropTypes.func.isRequired,
};

export default DadosUsuario;
