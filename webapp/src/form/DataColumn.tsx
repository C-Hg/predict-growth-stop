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

  const updateCellData = (dataName: DataNames, value: string) => {
    //formatting logic
    const newColumnData = { ...columnData };
    newColumnData[dataName] = value;
    updateData(newColumnData, index);
  };

  return (
    <VerticalFlexbox width={DATA_WIDTH} height={GRID_HEIGHT} margin="0">
      <DataCell
        top
        centered
        value={age}
        dataName={DataNames.age}
        updateCellData={updateCellData}
      />
      <DataCell
        value={expectedWeight}
        dataName={DataNames.expectedWeight}
        updateCellData={updateCellData}
      />
      <DataCell
        value={measuredWeight}
        dataName={DataNames.measuredWeight}
        updateCellData={updateCellData}
      />
    </VerticalFlexbox>
  );
};

export default DataColumn;
