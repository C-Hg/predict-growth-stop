import React from "react";

import StyledCell from "./Cell.styled";

import VerticalFlexbox from "../common/VerticalFlexbox.styled";

const Legend: React.FC = () => (
  <VerticalFlexbox width={"120px"} height="206px">
    <StyledCell top topLeft>
      Poids attendu
    </StyledCell>
    <StyledCell>Poids réel</StyledCell>
    <StyledCell bottomLeft>Âge</StyledCell>
  </VerticalFlexbox>
);

export default Legend;
