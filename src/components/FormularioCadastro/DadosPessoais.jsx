/* eslint-disable no-restricted-syntax */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  TextField, Button, Switch, FormControlLabel,
} from '@material-ui/core';
import useErros from '../../hooks/useError'; // hook criado
import ValidacoesCadastro from '../../context/ValidacoesCadastro';

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  // const [erros, setErros] = useState({ cpf: { valido: true, texto: '' } });

  // ao invés das validacoes virem por propriedades, estão vindo por contexto aqui
  const validacoes = useContext(ValidacoesCadastro);

  // o hook customizado devolve os erros e a funcao validarCampos
  const [erros, validarCampos, possoEnviar] = useErros(validacoes); // as validações são definidas na pasta models e passada por contexto

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({
            nome, sobrenome, cpf, novidades, promocoes,
          });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        name="nome"
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        name="sobrenome"
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        name="cpf" // utilizado para validação
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={(
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            color="primary"
          />
        )}
      />

      <FormControlLabel
        label="Novidades"
        control={(
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        )}
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

DadosPessoais.propTypes = {
  aoEnviar: PropTypes.func.isRequired,
};

export default DadosPessoais;
