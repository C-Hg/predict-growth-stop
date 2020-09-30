import React from "react";

import { Period } from "./Area.interface";

import H3 from "../components/common/H3.styled";
import HorizontalFlexbox from "../components/common/HorizontalFlexbox.styled";

interface Props {
  area: string;
  period: Period;
}

const invalidDataText =
  "Renseignez les données ci-dessous pour évaluer le risque d'arrêt de croissance.";
const resultText0 = "L'aire entre les courbes de ";
const resultText1 = " ans à ";
const resultText2 = " ans est égal à ";
const resultText3 = " kg/an.";

const Result: React.FC<Props> = (props: Props) => {
  const { area, period } = props;

  if (!period.isPeriodValid) {
    return <H3>{invalidDataText}</H3>;
  }
  // TODO: remplacer par des span +++ stylisés bold
  return (
    <HorizontalFlexbox>
      <H3>{resultText0}</H3>
      <H3 bold margin="0 5px 0 5px">
        {period.from.replace(".", ",")}
      </H3>
      <H3>{resultText1}</H3>
      <H3 bold margin="0 5px 0 5px">
        {period.to.replace(".", ",")}
      </H3>
      <H3>{resultText2}</H3>
      <H3 bold margin="0 5px 0 5px">
        {area.replace(".", ",")}
      </H3>
      <H3>{resultText3}</H3>
    </HorizontalFlexbox>
  );
};

export default Result;
