import React, { useState } from "react";

import { Data } from "./Data.interface";
import DataColumn from "./DataColumn";

const defaultData: Data = {
  age: "",
  expectedWeight: "",
  measuredWeight: "",
};

const DataGrid: React.FC = () => {
  const initialData: Data[] = [
    defaultData,
    defaultData,
    defaultData,
    defaultData,
    defaultData,
  ];
  const [data, setData] = useState<Data[]>(initialData);

  const addColumn = () => {
    const newData: Data[] = [...data, defaultData];
    setData(newData);
  };

  const updateData = (columnData: Data, index: number) => {
    const newData = [...data];
    newData[index] = columnData;
    setData(newData);
  };

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
