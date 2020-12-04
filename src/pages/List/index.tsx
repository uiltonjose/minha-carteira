import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import { Container } from "./styles";

const List: React.FC = () => {
  const options = [
    { value: "Uilton", label: "Uilton" },
    { value: "Viviane", label: "Viviane" },
    { value: "Sofia", label: "Sofia" },
  ];

  return (
    <Container>
      <ContentHeader title="Entrada" lineColor="#831e1e">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default List;
