/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function DadosEntrega({ aoEnviar, inicio }) {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState(0);
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    inicio();
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setOpen(true);
          aoEnviar({
            endereco, numero, estado, cidade, cep,
          });
        }}
      >
        <TextField
          value={cep}
          onChange={(event) => {
            setCep(event.target.value);
          }}
          id="cep"
          label="CEP"
          type="number"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={endereco}
          onChange={(event) => {
            setEndereco(event.target.value);
          }}
          id="endereco"
          label="Endereço"
          type="text"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          value={numero}
          onChange={(event) => {
            setNumero(event.target.value);
          }}
          id="numero"
          label="número"
          type="number"
          variant="outlined"
          margin="normal"
        />
        <TextField
          value={estado}
          onChange={(event) => {
            setEstado(event.target.value);
          }}
          id="estado"
          label="Estado"
          type="text"
          variant="outlined"
          margin="normal"
        />
        <TextField
          value={cidade}
          onChange={(event) => {
            setCidade(event.target.value);
          }}
          id="cidade"
          label="Cidade"
          type="text"
          variant="outlined"
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Finalizar Cadastro
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Formulário enviado com sucesso!
        </Alert>
      </Snackbar>
    </>
  );
}

DadosEntrega.propTypes = {
  aoEnviar: PropTypes.func.isRequired,
  inicio: PropTypes.func.isRequired,
};

export default DadosEntrega;
