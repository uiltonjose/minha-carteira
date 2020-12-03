import React from "react";
import ContentHeader from "../ContentHeader";
import { Container } from "./style";

const Content: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Content;
