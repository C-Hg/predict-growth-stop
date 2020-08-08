import React from "react";

import H1 from "./common/H1.styled";
import H2 from "./common/H2.styled";
import VerticalFlexbox from "./common/VerticalFlexbox.styled";

const TITLE = "";
const EXPLANATIONS =
  "Évaluez le risque d'arrêt de croissance pour un patient anorexique prépubère";

const Title: React.FC = () => {
  return (
    <VerticalFlexbox>
      <H1>{TITLE}</H1>
      <H2>{EXPLANATIONS}</H2>
    </VerticalFlexbox>
  );
};

export default Title;
