import React from "react";
import styled from "styled-components";

import AreaContainer from "./AreaContainer";
import InlineInput from "./InlineInput";

import device from "../styles/medias";

interface Props {
  from: string;
  isPeriodValid: boolean;
  setFrom: React.Dispatch<React.SetStateAction<string>>;
  setTo: React.Dispatch<React.SetStateAction<string>>;
  to: string;
}

const areaLegend = "Calculer l'aire sous la courbe entre ";
const areaLegendMobile1 = "Calculer l'aire sous la courbe";
const areaLegendMobile2 = "entre ";
const areaLegendJunction = " et ";
const areaLegendEnd = " ans. ";

const Area: React.FC<Props> = (props: Props) => {
  const { from, isPeriodValid, setFrom, setTo, to } = props;
  const screenWidth = window.innerWidth;
  const isMobile = screenWidth < 500;

  // correctly split the text on mobile
  if (isMobile) {
    return (
      <AreaContainer>
        <Text>{areaLegendMobile1}</Text>
        <Text>
          {areaLegendMobile2}
          <InlineInput
            isPeriodValid={isPeriodValid}
            value={from}
            updateValue={setFrom}
          />
          {areaLegendJunction}
          <InlineInput
            isPeriodValid={isPeriodValid}
            value={to}
            updateValue={setTo}
          />
          {areaLegendEnd}
        </Text>
      </AreaContainer>
    );
  }

  return (
    <AreaContainer>
      <Text>
        {areaLegend}
        <InlineInput
          isPeriodValid={isPeriodValid}
          value={from}
          updateValue={setFrom}
        />
        {areaLegendJunction}
        <InlineInput
          isPeriodValid={isPeriodValid}
          value={to}
          updateValue={setTo}
        />
        {areaLegendEnd}
      </Text>
    </AreaContainer>
  );
};

const Text: React.FC = styled.p`
  color: ${(props) => props.theme.colors.darkGrey};
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: 400;
  text-align: "center";
  background-color: "transparent";
  margin: 0;

  ${device.mobile} {
    font-size: 14px;
  }

  ${device.desktop} {
    font-size: 18px;
  }
`;

export default Area;
