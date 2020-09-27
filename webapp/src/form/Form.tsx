import React, { useState } from "react";

import { Column } from "./Data.interface";
import DataGrid from "./DataGrid";
import Legend from "./Legend";
import { GRID_HEIGHT } from "./constants";

import Chart from "../chart/Chart";
import Container from "../components/common/Container.styled";
import HorizontalFlexbox from "../components/common/HorizontalFlexbox.styled";

const defaultData: Column = {
  age: "",
  expectedWeight: "",
  isValidated: false,
  measuredWeight: "",
};

// interface Period {
//   from: number;
//   to: number;
// }

const Form: React.FC = () => {
  const initialData: Column[] = [
    defaultData,
    defaultData,
    defaultData,
    defaultData,
    defaultData,
  ];
  const [columns, setColumns] = useState<Column[]>(initialData);
  // const [period, setPeriod] = useState<Period>({ from: 0, to: 0 });

  // const addColumn = () => {
  //   const newData: Data[] = [...data, defaultData];
  //   setData(newData);
  // };

  const updateColumn = (columnData: Column, index: number) => {
    const newData = [...columns];
    newData[index] = columnData;
    setColumns(newData);
  };

  return (
    <>
      <Container width="50%">
        <Chart columns={columns} />
      </Container>
      <HorizontalFlexbox height={GRID_HEIGHT}>
        <Legend />
        <DataGrid data={columns} updateColumn={updateColumn} />
      </HorizontalFlexbox>
    </>
  );
};

export default Form;
