import React from "react";

import StyledInput from "./Input.styled";

interface Props {
  value: string;
  updateCell: (value: string) => void;
  centered?: boolean;
  top?: boolean;
}

const DataCell: React.FC<Props> = (props: Props) => {
  const { value, updateCell, ...rest } = props;

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value: newValue } = event.currentTarget;
    if (/[\d.,]*/i.exec(newValue)) {
      const formattedValue = newValue.replace(".", ",");
      updateCell(formattedValue);
    }
  };

  return (
    <StyledInput type="text" value={value} onChange={handleChange} {...rest} />
  );
};

export default DataCell;
