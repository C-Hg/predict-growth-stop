import React from "react";
import styled from "styled-components";

import { PeriodStatus } from "./Area.interface";

interface Props {
  status: PeriodStatus;
  value: string;
  updateValue: (value: string) => void;
}

const InlineInput: React.FC<Props> = (props: Props) => {
  const { status, value, updateValue } = props;

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value: newValue } = event.currentTarget;
    if (/[\d.,]*/i.exec(newValue)) {
      const formattedValue = newValue.replace(",", ".");
      updateValue(formattedValue);
    }
  };

  return (
    <StyledInput
      status={status}
      type="string"
      value={value.replace(".", ",")}
      onChange={handleChange}
    />
  );
};

interface StyledInputProps {
  readonly status: PeriodStatus;
}

const StyledInput = styled.input<StyledInputProps>`
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColors.main};
  border-style: solid;
  border-width: 0px;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) => {
    if (props.status === PeriodStatus.Default) {
      return props.theme.colors.lightBlue;
    }
    if (props.status === PeriodStatus.Valid) {
      return props.theme.colors.green;
    }
    return props.theme.colors.red;
  }};

  color: ${(props) => props.theme.colors.darkGrey};
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: 600;
  font-size: 16px;
  justify-content: "flex-start";

  width: 50px;
  margin-right: 10px;
  margin-left: 10px;
  text-align: center;
  padding: 0px;
`;

export default InlineInput;
