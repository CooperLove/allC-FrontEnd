import React from "react";
import Input from "../components/Input";

function RegisterUserPage() {
  return (
    <form>
      <Input required={true} isPassword={false} placeholder="Nome" />
      <Input required={true} isPassword={false} placeholder="Email" />
      <Input
        required={true}
        isPassword={false}
        placeholder="Telefone"
        isPhone={true}
        maxLength={15}
      />
      <Input required={true} isPassword={false} placeholder="Cidade" />
      <Input required={true} isPassword={false} placeholder="Endereço" />
      <Input required={true} isPassword={false} placeholder="Usuário" />
      <Input required={true} isPassword={true} placeholder="Senha" />
      <button>Salvar</button>
    </form>
  );
}

export default RegisterUserPage;
