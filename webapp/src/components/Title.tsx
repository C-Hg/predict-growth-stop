import React from "react";

import H1 from "./common/H1.styled";
import VerticalFlexbox from "./common/VerticalFlexbox.styled";

const TITLE =
  "Évaluez le risque d'arrêt de croissance pour un patient anorexique prépubère";

const Title: React.FC = () => {
  return (
    <VerticalFlexbox>
      <H1>{TITLE}</H1>
    </VerticalFlexbox>
  );
};

export default Title;
