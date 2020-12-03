import React, { useMemo } from "react";
import emojis from "../../utils/emojis";
import Toggle from "../Toggle";
import { Container, Profile, Welcome, UserName } from "./style";

const MainHeader: React.FC = () => {
  
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <Toggle/>

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Wonton Santos</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
