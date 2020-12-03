import React from "react";
import { Container, ToggleLabel, ToggleSelector } from "./style";

const Toggle: React.FC = () => (
  <Container>
    <ToggleLabel>Light</ToggleLabel>
    <ToggleSelector
      checked
      onChange={() => console.log("")}
      uncheckedIcon={false}
    />
    <ToggleLabel>Dark</ToggleLabel>
  </Container>
);

export default Toggle;
