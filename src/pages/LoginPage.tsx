import "../css/LoginPage.css";
import "../App.css";
import { FaGoogle, FaFacebook } from "react-icons/fa/index.js";
import { Button } from "@chakra-ui/button";
import { Checkbox, Input } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import ChakraDrawer from "../components/Drawer.tsx";
import PasswordInput from "../components/PasswordInput.tsx";
import { useNavigate } from "react-router-dom";
import { setUser, IUserData } from "../reducers/userReducer.ts";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index.ts";

export const LoginPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.userData);
  const dispatch = useDispatch();

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
        <form className="loginForm">
          <div className="projectInfoContainer">
            <span className="projectTitle">all-C</span>
            <span className="projectDescription">
              Aplicação para gerenciamento de contatos
            </span>
          </div>
          <Input
            placeholder="Email"
            required={true}
            // _placeholder={{ opacity: 1, color: "gray.500" }}
          />
          <PasswordInput required={true} placeholder="Senha" />
          <div className="loginActions">
            <Checkbox colorScheme="green" defaultChecked>
              Lembrar informações?
            </Checkbox>
            <Button
              onClick={() => {
                let newData: IUserData = { ...user.data, email: "dsadsa" };
                dispatch(setUser(newData));
                navigate("/home");
              }}
            >
              Entrar
            </Button>
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
      <h4>Username: {user.data.fullName}</h4>
      <h4>Email: {user.data.email}</h4>
    </div>
  );
};

export default LoginPage;
