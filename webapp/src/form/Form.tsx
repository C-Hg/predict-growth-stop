import React, { useState } from "react";

import { Data } from "./Data.interface";
import DataGrid from "./DataGrid";
import Legend from "./Legend";
import { GRID_HEIGHT } from "./constants";

import Chart from "../chart/Chart";
import Container from "../components/common/Container.styled";
import HorizontalFlexbox from "../components/common/HorizontalFlexbox.styled";

const defaultData: Data = {
  age: "",
  expectedWeight: "",
  measuredWeight: "",
};

interface Period {
  from: number;
  to: number;
}

const Form: React.FC = () => {
  const initialData: Data[] = [
    defaultData,
    defaultData,
    defaultData,
    defaultData,
    defaultData,
  ];
  const [data, setData] = useState<Data[]>(initialData);
  const [period, setPeriod] = useState<Period>({ from: 0, to: 0 });

  // const addColumn = () => {
  //   const newData: Data[] = [...data, defaultData];
  //   setData(newData);
  // };

  const updateData = (columnData: Data, index: number) => {
    const newData = [...data];
    newData[index] = columnData;
    setData(newData);
  };

  return (
    <>
      <Container width="50%">
        <Chart data={data} />
      </Container>
      <HorizontalFlexbox height={GRID_HEIGHT}>
        <Legend />
        <DataGrid data={data} updateData={updateData} />
      </HorizontalFlexbox>
    </>
  );
};

export default Form;
