import React from "react";

import InlineInput from "./InlineInput";

import H3 from "../components/common/H3.styled";
import HorizontalFlexbox from "../components/common/HorizontalFlexbox.styled";

interface Props {
  from: string;
  isPeriodValid: boolean;
  setFrom: React.Dispatch<React.SetStateAction<string>>;
  setTo: React.Dispatch<React.SetStateAction<string>>;
  to: string;
}

const areaLegend = "Calculer l'aire entre les courbes de ";
const areaLegendJunction = " ans à ";
const areaLegendEnd = " ans.";

const Area: React.FC<Props> = (props: Props) => {
  const { from, isPeriodValid, setFrom, setTo, to } = props;

  return (
    <HorizontalFlexbox margin="20px 0 0 0">
      <H3>{areaLegend}</H3>
      <InlineInput
        isPeriodValid={isPeriodValid}
        value={from}
        updateValue={setFrom}
      />
      <H3>{areaLegendJunction}</H3>
      <InlineInput
        isPeriodValid={isPeriodValid}
        value={to}
        updateValue={setTo}
      />
      <H3>{areaLegendEnd}</H3>
    </HorizontalFlexbox>
  );
};

export default Area;
