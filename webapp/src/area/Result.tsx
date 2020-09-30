import React from "react";
import styled from "styled-components";

import { Period } from "./Area.interface";
import ResultContainer from "./ResultContainer.styled";

import H3 from "../components/common/H3.styled";
import HorizontalFlexbox from "../components/common/HorizontalFlexbox.styled";

interface Props {
  area: string;
  period: Period;
}

const invalidDataText =
  "Insérez vos données ci-dessous pour évaluer le risque d'arrêt de croissance (maximum 12 points). " +
  "Les âges doivent être en années et les poids en kg. " +
  "Enfin, sélectionnez l'intervalle à étudier.";
const resultText0 = "L'aire entre les courbes de ";
const resultText1 = " ans à ";
const resultText2 = " ans est égal à ";
const resultText3 = " kg/an.";

const Result: React.FC<Props> = (props: Props) => {
  const { area, period } = props;

  if (!period.isPeriodValid) {
    return (
      <ResultContainer>
        <H3>{invalidDataText}</H3>
      </ResultContainer>
    );
  }
  // TODO: remplacer par des span +++ stylisés bold
  return (
    <ResultContainer>
      <H3>
        {resultText0}
        <Bold>{period.from.replace(".", ",")}</Bold>
        {resultText1}
        <Bold>{period.to.replace(".", ",")}</Bold>
        {resultText2}
        <Bold>{area.replace(".", ",")}</Bold>
        {resultText3}
      </H3>
    </ResultContainer>
  );
};

const Bold: React.FC = styled.span`
  font-weight: 700;
`;

export default Result;
