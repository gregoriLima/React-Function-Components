// funções de validação de cadatro

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: 'CPF deve ter 11 digitos.' };
  }
  return { valido: true, texto: '' };
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return { valido: false, texto: 'A senha deve ter no mínimo 4 caracteres.' };
  }
  return { valido: true, texto: '' };
}

export { validarCPF, validarSenha };
