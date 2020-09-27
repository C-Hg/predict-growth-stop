import React from "react";

import { Column, DataNames } from "./Data.interface";
import DataCell from "./DataCell";
import { DATA_WIDTH, GRID_HEIGHT } from "./constants";
import validateColumn from "./useValidateColumn";

import VerticalFlexbox from "../components/common/VerticalFlexbox.styled";

interface Props {
  columnData: Column;
  updateColumn: (columnData: Column) => void;
}

const DataColumn: React.FC<Props> = (props: Props) => {
  const { columnData, updateColumn } = props;
  const { age, expectedWeight, measuredWeight } = columnData;

  // update the validation status of the column if necessary
  const isColumnValid = validateColumn(columnData);
  if (isColumnValid !== columnData.isValidated) {
    const updatedColumn = { ...columnData };
    updatedColumn.isValidated = isColumnValid;
    updateColumn(updatedColumn);
  }

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
    <VerticalFlexbox width={DATA_WIDTH} height={GRID_HEIGHT} margin="0">
      <DataCell top centered value={age} updateCell={updateAge} />
      <DataCell value={expectedWeight} updateCell={updateExpectedWeight} />
      <DataCell value={measuredWeight} updateCell={updateMeasuredWeight} />
    </VerticalFlexbox>
  );
};

export default DataColumn;
