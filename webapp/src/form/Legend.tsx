import React from "react";

import StyledCell from "./Cell.styled";
import { GRID_HEIGHT, LEGEND_WIDTH } from "./constants";

import VerticalFlexbox from "../components/common/VerticalFlexbox.styled";

const PADDING = "10px";

const Legend: React.FC = () => (
  <VerticalFlexbox width={LEGEND_WIDTH} height={GRID_HEIGHT} margin="0">
    <StyledCell padding={PADDING} top topLeft>
      Âge
    </StyledCell>
    <StyledCell padding={PADDING}>Poids attendu</StyledCell>
    <StyledCell padding={PADDING} bottomLeft>
      Poids mesuré
    </StyledCell>
  </VerticalFlexbox>
);

export default Legend;
