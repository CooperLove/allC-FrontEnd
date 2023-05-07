import "../css/LoginPage.css";
import "../App.css";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Button } from "@chakra-ui/button";
import {
  Checkbox,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { useEffect, useState } from "react";
import ChakraDrawer from "../components/Drawer";
import PasswordInput from "../components/PasswordInput";
import { useNavigate, Navigate, Link } from "react-router-dom";

export const LoginPage = () => {
  function Example() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
    );
  }

  return (
    <div>
      <div className="LoginContainer">
        <form className="loginForm" action="/home">
          <div className="projectInfoContainer">
            <span className="projectTitle">all-C</span>
            <span className="projectDescription">
              Aplicação para gerenciamento de contatos
            </span>
          </div>
          <Input
            placeholder="Email"
            _placeholder={{ opacity: 1, color: "gray.500" }}
          />
          <PasswordInput placeholder="Senha" />
          <div className="loginActions">
            <Checkbox colorScheme="green" defaultChecked>
              Lembrar informações?
            </Checkbox>
            <Button type="submit">Entrar</Button>
          </div>
        </form>
        <span>Ou</span>
        <Button colorScheme="gray" leftIcon={<FaGoogle />}>
          Entrar com Google
        </Button>
        <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
          Entrar com Facebook
        </Button>
        <Button variant="link" className="linkButton">
          Esqueceu a senha ?
        </Button>
      </div>
      <div className="RegisterContainer">
        <span>Não tem uma conta ? </span>
        <ChakraDrawer />
        {/* <a href="">Registre-se</a> */}
      </div>
      {Example()}
    </div>
  );
};

export default LoginPage;
