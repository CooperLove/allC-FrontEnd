import { Box, Button, Divider } from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineMessage,
  AiOutlineSearch,
} from "react-icons/ai/index.js";
import { IoMdNotificationsOutline } from "react-icons/io/index.js";
import { useNavigate } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate();
  return (
    <div className="sideMenu__Container">
      <Box className="sideMenu__Logo-Container">
        <h1 className="sideMenu__Logo">all-C</h1>
        <Divider orientation="horizontal" />
      </Box>
      <div className="sideMenu__Options-Container">
        <div className="sideMenu__Single-Option-Container">
          <Button variant={"unstyled"} className="sideMenu__Option">
            <AiOutlineHome className="option-Icon" />
            Página Inicial
          </Button>
        </div>
        <div className="sideMenu__Single-Option-Container">
          <Button
            variant={"unstyled"}
            className="sideMenu__Option"
            onClick={() => navigate("/profile")}
          >
            <IoMdNotificationsOutline className="sideMenu__Option option-Icon" />
            Notificações
          </Button>
        </div>
        <div className="sideMenu__Single-Option-Container">
          <Button variant={"unstyled"} className="sideMenu__Option">
            <AiOutlineMessage className="sideMenu__Option option-Icon" />
            Mensagens
          </Button>
        </div>
        <div className="sideMenu__Single-Option-Container">
          <Button variant={"unstyled"} className="sideMenu__Option">
            <AiOutlineSearch className="sideMenu__Option option-Icon" />
            Pesquisar
          </Button>
        </div>
      </div>
      <div className="sideMenu__Configuration-Container">
        <Divider />
        <Button variant={"unstyled"} className="sideMenu__Option">
          <AiOutlineSetting className="option-Icon" />
          Configurações
        </Button>
      </div>
    </div>
  );
}

export default SideMenu;
