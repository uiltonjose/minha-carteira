import React, { useState } from "react";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu,
} from "react-icons/md";

import Toggle from "../Toggle";
import logoImg from "../../assets/logo.svg";

import { useAuth } from "../../hooks/auth";
import { useTheme } from "../../hooks/theme";

import {
  Container,
  Header,
  LogImg,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
  Title,
  ToggleMenu,
  ThemeToggleFooter,
} from "./styles";

const Aside: React.FC = () => {
  const [toggleMenuIsOpen, setToggleMenuIsOpen] = useState(false);
  
  const { toggleTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );
 
  const { signOut } = useAuth();

  const handleToggleMenu = () => {
    setToggleMenuIsOpen(!toggleMenuIsOpen);
  };

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  return (
    <Container menuIsOpen={toggleMenuIsOpen}>
      <Header>
        <ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpen ? <MdClose /> : <MdMenu />}
        </ToggleMenu>

        <LogImg src={logoImg} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/">
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href="/list/entry-balance">
          <MdArrowDownward />
          Entradas
        </MenuItemLink>
        <MenuItemLink href="/list/exit-balance">
          <MdArrowUpward />
          Saídas
        </MenuItemLink>
        <MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContainer>

      <ThemeToggleFooter menuIsOpen={toggleMenuIsOpen}>
        <Toggle
          labelLeft="Light"
          labelRight="Dark"
          checked={darkTheme}
          onChange={handleChangeTheme}
        />
      </ThemeToggleFooter>
    </Container>
  );
};

export default Aside;
