import React from "react";

import { Column, DataNames } from "./Data.interface";
import DataCell from "./DataCell";
import DataColumnContainer from "./styled/DataColumnContainer.styled";

interface Props {
  columnData: Column;
  updateColumn: (columnData: Column) => void;
}

const DataColumn: React.FC<Props> = (props: Props) => {
  const { columnData, updateColumn } = props;
  const { age, expectedWeight, measuredWeight } = columnData;

  const updateCell = (dataName: DataNames, value: string) => {
    //formatting logic
    const newColumnData = { ...columnData };
    newColumnData[dataName] = value;
    updateColumn(newColumnData);
  };

  const updateAge = (value: string) => updateCell(DataNames.age, value);
  const updateExpectedWeight = (value: string) =>
    updateCell(DataNames.expectedWeight, value);
  const updateMeasuredWeight = (value: string) =>
    updateCell(DataNames.measuredWeight, value);

  return (
    <DataColumnContainer>
      <DataCell top centered value={age} updateCell={updateAge} />
      <DataCell value={expectedWeight} updateCell={updateExpectedWeight} />
      <DataCell value={measuredWeight} updateCell={updateMeasuredWeight} />
    </DataColumnContainer>
  );
};

export default DataColumn;
