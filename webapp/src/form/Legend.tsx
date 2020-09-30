import React from "react";

import StyledCell from "./styled/Cell.styled";
import LegendContainer from "./styled/LegendContainer.styled";

const Legend: React.FC = () => (
  <LegendContainer>
    <StyledCell top topLeft>
      Âge
    </StyledCell>
    <StyledCell>Poids attendu</StyledCell>
    <StyledCell bottomLeft>Poids mesuré</StyledCell>
  </LegendContainer>
);

export default Legend;
