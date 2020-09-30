import React from "react";

import { Column } from "./Data.interface";
import DataColumn from "./DataColumn";
import DataColumnsContainer from "./styled/DataColumnsContainer.styled";

interface Props {
  data: Column[];
  updateColumn: (columnData: Column, index: number) => void;
}

const DataGrid: React.FC<Props> = (props: Props) => {
  const { data, updateColumn } = props;

  const columns = data.map((columnData, index) => {
    const indexedUpdateColumn = (columnData: Column) =>
      updateColumn(columnData, index);

    return (
      <DataColumn
        columnData={columnData}
        updateColumn={indexedUpdateColumn}
        key={index}
      />
    );
  });

  return <DataColumnsContainer>{columns}</DataColumnsContainer>;
};

export default DataGrid;
