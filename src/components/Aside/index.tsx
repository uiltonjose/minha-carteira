import React from "react";
import {
  Container,
  Header,
  LogImg,
  MenuContainer,
  MenuItemLink,
  Title,
} from "./style";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

import logoImg from "../../assets/logo.svg";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogImg src={logoImg} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="#">
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdArrowDownward />
          Entradas
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdArrowUpward />
          Saídas
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
