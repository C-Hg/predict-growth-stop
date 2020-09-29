import React from "react";
import styled from "styled-components";

import { GRID_BORDER_RADIUS } from "./constants";

interface Props {
  value: string;
  updateCell: (value: string) => void;
  centered?: boolean;
  top?: boolean;
}

const DataCell: React.FC<Props> = (props: Props) => {
  const { value, updateCell, ...rest } = props;

  // TODO: is it working with commas ??, replace before display instead
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value: newValue } = event.currentTarget;
    if (/[\d.,]*/i.exec(newValue)) {
      const formattedValue = newValue.replace(",", ".");
      updateCell(formattedValue);
    }
  };

  return (
    <StyledInput
      type="text"
      value={value.replace(".", ",")}
      onChange={handleChange}
      {...rest}
    />
  );
};

interface StyledInputProps {
  readonly bottomLeft?: boolean;
  readonly bottomRight?: boolean;
  readonly centered?: boolean;
  readonly top?: boolean;
  readonly topLeft?: boolean;
  readonly topRight?: boolean;
  readonly padding?: string;
}

const StyledInput = styled.input<StyledInputProps>`
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColors.main};
  border-bottom-left-radius: ${(props) =>
    props.bottomLeft ? GRID_BORDER_RADIUS : "0px"};
  border-bottom-right-radius: ${(props) =>
    props.bottomRight ? GRID_BORDER_RADIUS : "0px"};
  border-color: ${(props) => props.theme.colors.githubGrey};
  border-style: solid;
  border-width: 2px;

  border-top-left-radius: ${(props) =>
    props.topLeft ? GRID_BORDER_RADIUS : "0px"};
  border-top-right-radius: ${(props) =>
    props.topRight ? GRID_BORDER_RADIUS : "0px"};
  color: ${(props) => props.theme.colors.darkGrey};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 18px;
  justify-content: ${(props) => (props.centered ? "center" : "flex-start")};

  margin: 0px;
  margin-top: ${(props) => (props.top ? "0px" : "-2px")};
  width: 60px;
  height: 100%;
  text-align: center;
  padding: 0px;
  :focus {
    border-color: ${(props) => props.theme.colors.chartOrange};
    z-index: 10;
  }
`;

export default DataCell;
