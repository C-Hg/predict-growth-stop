import { AddCircle } from "@styled-icons/ionicons-outline";
import React from "react";
import styled from "styled-components";

import AddDataCell from "./styled/AddDataCell.styled";

import theme from "../styles/theme";

interface Props {
  addColumn: () => void;
}

const AddData: React.FC<Props> = (props: Props) => {
  const { addColumn } = props;

  return (
    <AddDataCell>
      <StyledCircle
        color={theme.colors.chartBlue}
        onClick={addColumn}
        size={36}
      />
    </AddDataCell>
  );
};

const StyledCircle = styled(AddCircle)`
  &:hover {
    cursor: pointer;
  }
`;

export default AddData;
