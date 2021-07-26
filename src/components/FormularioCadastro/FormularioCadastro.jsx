import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  function proximo(dados) {
    console.log(dados);
    setEtapaAtual(etapaAtual + 1);
  }

  const formularios = [
    <DadosUsuario aoEnviar={proximo} />,
    <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={aoEnviar} inicio={() => setEtapaAtual(0)} />,
  ];

  return (
    <>
      {formularios[etapaAtual]}
    </>
  );
}

FormularioCadastro.propTypes = {
  aoEnviar: PropTypes.func.isRequired,
  validarCPF: PropTypes.func.isRequired,
};

export default FormularioCadastro;
