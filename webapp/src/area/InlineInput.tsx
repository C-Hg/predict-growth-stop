import React from "react";
import styled from "styled-components";

import device from "../styles/medias";

interface Props {
  isPeriodValid: boolean;
  value: string;
  updateValue: (value: string) => void;
}

const InlineInput: React.FC<Props> = (props: Props) => {
  const { isPeriodValid, value, updateValue } = props;

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value: newValue } = event.currentTarget;
    if (/[\d.,]*/i.exec(newValue)) {
      const formattedValue = newValue.replace(",", ".");
      updateValue(formattedValue);
    }
  };

  return (
    <StyledInput
      isPeriodValid={isPeriodValid}
      type="string"
      value={value.replace(".", ",")}
      onChange={handleChange}
    />
  );
};

interface StyledInputProps {
  readonly isPeriodValid: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  align-items: center;
  background-color: transparent;
  border-style: solid;
  border-width: 0px;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) =>
    props.isPeriodValid ? props.theme.colors.green : props.theme.colors.orange};

  color: ${(props) => props.theme.colors.darkGrey};
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: 600;
  justify-content: "flex-start";

  width: 40px;
  margin-right: 2px;
  margin-left: 2px;
  text-align: center;
  padding: 0px;

  &:hover {
    cursor: pointer;
  }

  ${device.mobile} {
    font-size: 14px;
  }

  ${device.desktop} {
    font-size: 16px;
  }
`;

export default InlineInput;
