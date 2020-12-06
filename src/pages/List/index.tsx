import React, { useMemo, useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/SelectInput";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import { Container, Content, Filters } from "./styles";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

interface IRouteParams {
  match: {
    params: {
      type: string;
    };
  };
}

interface IData {
  id: string;
  title: string;
  amountFormatted: string;
  type: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);

  const { type } = match.params;
  const contentData = useMemo(() => {
    return type === "entry-balance"
      ? { title: "Entradas", lineColor: "#F7931B" }
      : { title: "Saídas", lineColor: "#E44C4E" };
  }, [type]);

  const listData = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);

  const months = [
    { value: 7, label: "Julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" },
  ];

  const years = [
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 },
    { value: 2018, label: 2018 },
  ];

  useEffect(() => {
    const response = listData.map((item) => {
      return {
        id: String(Math.random() * data.length),
        title: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        type: item.type,
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E",
      };
    });
    setData(response);
  }, []);

  return (
    <Container>
      <ContentHeader
        title={contentData.title}
        lineColor={contentData.lineColor}
      >
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </Filters>

      <Content>
        {data.map((item) => {
          return (
            <HistoryFinanceCard
              key={item.id}
              title={item.title}
              subtitle={item.dateFormatted}
              amount={item.amountFormatted}
              tagColor={item.tagColor}
            />
          );
        })}
      </Content>
    </Container>
  );
};

export default List;
