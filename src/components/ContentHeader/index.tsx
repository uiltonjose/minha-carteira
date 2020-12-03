import React from "react";
import SelectInput from "../SelectInput";

import { Container, TitleContainer, Controllers } from "./styles";

const ContentHeader: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Titulo</h1>
      </TitleContainer>

      <Controllers>
        <SelectInput/>
      </Controllers>
    </Container>
  );
};

export default ContentHeader;
