import React from "react";
import styled from "styled-components";

import { GRID_BORDER_RADIUS, LEGEND_WIDTH_MOBILE } from "./constants";

import device from "../styles/medias";

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
  background-color: ${(props) => props.theme.backgroundColors.main};

  border-color: ${(props) => props.theme.colors.githubGrey};
  border-style: solid;
  border-width: 2px;

  color: ${(props) => props.theme.colors.darkGrey};
  font-family: ${(props) => props.theme.fonts.main};

  margin: 0;
  margin-top: ${(props) => (props.top ? "0px" : "-2px")};
  height: 100%;
  text-align: center;
  padding: 0;
  :focus {
    border-color: ${(props) => props.theme.colors.chartOrange};
    z-index: 10;
  }

  ${device.mobile} {
    font-size: 14px;

    width: ${LEGEND_WIDTH_MOBILE};
  }

  ${device.mobileL} {
    width: 60px;
  }

  ${device.desktop} {
    font-size: 16px;
  }
`;

export default DataCell;
