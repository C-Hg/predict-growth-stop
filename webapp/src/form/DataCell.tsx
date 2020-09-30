import React from "react";
import styled from "styled-components";

import { DATA_WIDTH_MOBILE, GRID_HEIGHT_MOBILE } from "./constants";

import device from "../styles/medias";

interface Props {
  value: string;
  updateCell: (value: string) => void;
  centered?: boolean;
  last: boolean;
  bottom?: boolean;

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
  readonly last?: boolean;

  readonly bottom?: boolean;
  readonly top?: boolean;
  readonly topLeft?: boolean;
  readonly topRight?: boolean;
  readonly padding?: string;
}

const StyledInput = styled.input<StyledInputProps>`
  background-color: ${(props) => props.theme.backgroundColors.card};

  border-color: ${(props) => props.theme.colors.githubGrey};
  border-style: solid;
  border-width: 2px;

  color: ${(props) => props.theme.colors.darkGrey};
  font-family: ${(props) => props.theme.fonts.main};

  margin: 0;

  text-align: center;
  padding: 0;
  :focus {
    border-color: ${(props) => props.theme.colors.chartOrange};
    z-index: 10;
  }

  &:hover {
    cursor: pointer;
  }

  ${device.mobile} {
    font-size: 14px;
    height: ${GRID_HEIGHT_MOBILE};
    width: ${DATA_WIDTH_MOBILE};

    border-bottom-width: ${(props) => (props.last ? "2px" : "0px")};
    border-right-width: ${(props) => (props.bottom ? "2px" : "0px")};
  }

  ${device.mobileL} {
    height: 100%;
    width: 60px;

    border-bottom-width: ${(props) => (props.bottom ? "2px" : "0px")};
    border-right-width: 2px;
  }

  ${device.desktop} {
    height: 100%;
    font-size: 16px;
  }
`;

export default DataCell;
