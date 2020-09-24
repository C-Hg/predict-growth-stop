import React from "react";

import { Data, DataNames } from "./Data.interface";
import DataCell from "./DataCell";
import { DATA_WIDTH, GRID_HEIGHT } from "./constants";

import VerticalFlexbox from "../components/common/VerticalFlexbox.styled";

interface Props {
  columnData: Data;
  index: number;
  updateData: (columnData: Data, index: number) => void;
}

const DataColumn: React.FC<Props> = (props: Props) => {
  const { columnData, index, updateData } = props;
  const { age, expectedWeight, measuredWeight } = columnData;

  const updateCell = (dataName: DataNames, value: string) => {
    //formatting logic
    const newColumnData = { ...columnData };
    newColumnData[dataName] = value;
    updateData(newColumnData, index);
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
