import "../css/Header.css";
import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

function Header() {
  return (
    <header className="header__main-container">
      <div className="header__title">allC</div>
      <section>
        <Menu>
          <MenuButton>
            <div className="header__user-options">
              <span>Username</span>
              <Avatar size="md" />
            </div>
          </MenuButton>
          <MenuList>
            <MenuItem>Perfil</MenuItem>
            <MenuItem>Configurações</MenuItem>
            <MenuItem>Sair</MenuItem>
          </MenuList>
        </Menu>
      </section>
    </header>
  );
}

export default Header;
