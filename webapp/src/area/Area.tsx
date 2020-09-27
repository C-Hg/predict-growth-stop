import React from "react";

import { PeriodStatus } from "./Area.interface";
import InlineInput from "./InlineInput";
import checkPeriodStatus from "./checkPeriodStatus";

import H3 from "../components/common/H3.styled";
import HorizontalFlexbox from "../components/common/HorizontalFlexbox.styled";
import { Column } from "../form/Data.interface";

interface Props {
  columns: Column[];
  from: string;
  isPeriodValid: boolean;
  setFrom: React.Dispatch<React.SetStateAction<string>>;
  setIsPeriodValid: React.Dispatch<React.SetStateAction<boolean>>;
  setTo: React.Dispatch<React.SetStateAction<string>>;
  to: string;
}

const areaLegend = "Calculer l'aire entre les courbes de ";
const areaLegendJunction = " ans à ";
const areaLegendEnd = " ans.";

const Area: React.FC<Props> = (props: Props) => {
  const {
    columns,
    from,
    isPeriodValid,
    setFrom,
    setIsPeriodValid,
    setTo,
    to,
  } = props;

  // TODO: validation définitive horizontale (les ages doivent être impérativement croissants)
  const status = checkPeriodStatus(columns, from, to);
  const updatedIsPeriodValid = status === PeriodStatus.Valid;
  if (isPeriodValid !== updatedIsPeriodValid) {
    setIsPeriodValid(updatedIsPeriodValid);
  }

  return (
    <HorizontalFlexbox margin="20px 0 0 0">
      <H3>{areaLegend}</H3>
      <InlineInput status={status} value={from} updateValue={setFrom} />
      <H3>{areaLegendJunction}</H3>
      <InlineInput status={status} value={to} updateValue={setTo} />
      <H3>{areaLegendEnd}</H3>
    </HorizontalFlexbox>
  );
};

export default Area;
