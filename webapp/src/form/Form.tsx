import React, { useState } from "react";

import { Column } from "./Data.interface";
import DataGrid from "./DataGrid";
import Legend from "./Legend";
import { GRID_HEIGHT } from "./constants";

import Area from "../area/Area";
import { Period } from "../area/Area.interface";
import Result from "../area/Result";
import Chart from "../chart/Chart";
import HorizontalFlexbox from "../components/common/HorizontalFlexbox.styled";
import VerticalFlexbox from "../components/common/VerticalFlexbox.styled";

const defaultData: Column = {
  age: "",
  expectedWeight: "",
  isValidated: false,
  measuredWeight: "",
};

const Form: React.FC = () => {
  const initialData: Column[] = [
    defaultData,
    defaultData,
    defaultData,
    defaultData,
    defaultData,
  ];
  const [columns, setColumns] = useState<Column[]>(initialData);
  const [from, setFrom] = useState<string>("");
  const [isPeriodValid, setIsPeriodValid] = useState<boolean>(false);
  const [to, setTo] = useState<string>("");

  const period: Period = { from, isPeriodValid, to };

  // const addColumn = () => {
  //   const newData: Data[] = [...data, defaultData];
  //   setData(newData);
  // };

  const updateColumn = (columnData: Column, index: number) => {
    const newData = [...columns];
    newData[index] = columnData;
    setColumns(newData);
  };

  // TODO: validation horizontale complète: âges croissants et toutes colonnes valides
  // minimum 2 colonnes bien sûr
  return (
    <>
      <VerticalFlexbox width="50%" margin="20px auto 20px auto">
        <Chart columns={columns} />
        <Result columns={columns} period={period} />
      </VerticalFlexbox>
      <HorizontalFlexbox height={GRID_HEIGHT}>
        <Legend />
        <DataGrid data={columns} updateColumn={updateColumn} />
      </HorizontalFlexbox>
      <Area
        columns={columns}
        from={from}
        isPeriodValid={isPeriodValid}
        setFrom={setFrom}
        setTo={setTo}
        setIsPeriodValid={setIsPeriodValid}
        to={to}
      />
    </>
  );
};

export default Form;
