import Input from "../components/Input";
import "../css/Login Page CSS/LoginPage.css";
import "../App.css";
import googleLogo from "../assets/Google Logo.png";
import facebookLogo from "../assets/Facebook Logo.png";

export const LoginPage = () => {
  return (
    <div>
      <div className="LoginContainer">
        <form className="loginForm" action="">
          <div className="projectInfoContainer">
            <span className="projectTitle">all-C</span>
            <span className="projectDescription">
              Aplicação para gerenciamento de contatos
            </span>
          </div>
          <Input placeholder="Email" required={true} />
          <Input placeholder="Senha" isPassword={true} required={true} />
          <div className="loginActions">
            <div className="rememberLoginSection">
              <input type="checkbox" />
              <span>Lembrar Informações ?</span>
            </div>
            <button className="transparentButton" type="submit">
              Entrar
            </button>
          </div>
        </form>
        <span>Ou</span>
        <button className="transparentButton">
          <img
            src={googleLogo}
            alt=""
            width={"20px"}
            style={{ paddingRight: 10 }}
          />
          Entrar com Google
        </button>
        <button className="transparentButton">
          <img
            src={facebookLogo}
            alt=""
            width={"20px"}
            style={{ paddingRight: 10 }}
          />
          Entrar com Facebook
        </button>
        <a href="">Esqueceu a senha ?</a>
      </div>
      <div className="RegisterContainer">
        <span>Não tem uma conta ? </span>
        <a href="">Registre-se</a>
      </div>
    </div>
  );
};

export default LoginPage;
