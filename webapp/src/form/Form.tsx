import React, { useState } from "react";

import { Column } from "./Data.interface";
import DataGrid from "./DataGrid";
import Legend from "./Legend";
import DataGridContainer from "./styled/DataGridContainer.styled";
import validateColumn from "./validateColumn";

import Area from "../area/Area";
import { Period, PeriodStatus } from "../area/Area.interface";
import Result from "../area/Result";
import checkPeriodStatus from "../area/checkPeriodStatus";
import useAreaBetweenCurves from "../area/useAreaBetweenCurves";
import Chart from "../chart/Chart";
import ChartContainer from "../chart/ChartContainer.styled";

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
  const { area, studiedIntervals } = useAreaBetweenCurves(columns, period);

  // const addColumn = () => {
  //   const newData: Data[] = [...data, defaultData];
  //   setData(newData);
  // };

  // TODO: validation définitive horizontale (les ages doivent être impérativement croissants)
  const status = checkPeriodStatus(columns, from, to);
  const updatedIsPeriodValid = status === PeriodStatus.Valid;
  if (isPeriodValid !== updatedIsPeriodValid) {
    setIsPeriodValid(updatedIsPeriodValid);
  }

  const updateColumn = (columnData: Column, index: number) => {
    const newData = [...columns];
    newData[index] = columnData;
    setColumns(newData);
  };

  // update the validation status of the column if necessary
  columns.forEach((column, index) => {
    const isColumnValid = validateColumn(column);
    if (isColumnValid !== column.isValidated) {
      const updatedColumn = { ...column };
      updatedColumn.isValidated = isColumnValid;
      updateColumn(updatedColumn, index);
    }
  });

  // TODO: validation horizontale complète: âges croissants et toutes colonnes valides
  // minimum 2 colonnes bien sûr
  return (
    <>
      <ChartContainer>
        <Chart
          columns={columns}
          studiedIntervals={studiedIntervals}
          period={period}
        />
        <Result area={area} period={period} />
      </ChartContainer>
      <DataGridContainer>
        <Legend />
        <DataGrid data={columns} updateColumn={updateColumn} />
      </DataGridContainer>
      <Area
        from={from}
        isPeriodValid={isPeriodValid}
        setFrom={setFrom}
        setTo={setTo}
        to={to}
      />
    </>
  );
};

export default Form;
