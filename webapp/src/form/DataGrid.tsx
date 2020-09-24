import React from "react";

import { Data } from "./Data.interface";
import DataColumn from "./DataColumn";

interface Props {
  data: Data[];
  updateData: (columnData: Data, index: number) => void;
}

const DataGrid: React.FC<Props> = (props: Props) => {
  const { data, updateData } = props;

  const columns = data.map((columnData, index) => (
    <DataColumn
      columnData={columnData}
      index={index}
      updateData={updateData}
      key={index}
    />
  ));

  return <>{columns}</>;
};

export default DataGrid;
