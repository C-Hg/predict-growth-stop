import React from "react";

import DataGrid from "./DataGrid";
import Legend from "./Legend";
import { GRID_HEIGHT } from "./constants";

import HorizontalFlexbox from "../components/common/HorizontalFlexbox.styled";

const Form: React.FC = () => (
  <HorizontalFlexbox height={GRID_HEIGHT}>
    <Legend />
    <DataGrid />
  </HorizontalFlexbox>
);

export default Form;
