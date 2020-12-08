import React, { useMemo, useState } from "react";
import { useTheme } from "../../hooks/theme";
import emojis from "../../utils/emojis";
import Toggle from "../Toggle";

import { Container, Profile, Welcome, UserName } from "./styles";

const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  return (
    <Container>
      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme}
        onChange={handleChangeTheme}
      />

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Wonton Santos</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
