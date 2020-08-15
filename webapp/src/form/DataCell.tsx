import React from "react";

import StyledCell from "./Cell.styled";
import { DataNames } from "./Data.interface";
import StyledInput from "./Input.styled";

interface Props {
  value: string;
  dataName: DataNames;
  updateCellData: (dataName: DataNames, value: string) => void;
  centered?: boolean;
  top?: boolean;
}

const DataCell: React.FC<Props> = (props: Props) => {
  const { value, dataName, updateCellData, ...rest } = props;

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value: newValue } = event.currentTarget;
    if (/[\d.,]/i.exec(newValue)) {
      updateCellData(dataName, newValue);
    }
  };

  return (
    <StyledInput type="text" value={value} onChange={handleChange} {...rest} />
  );
};

export default DataCell;
