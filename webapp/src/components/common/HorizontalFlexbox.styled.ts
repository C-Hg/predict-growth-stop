import styled from "styled-components";

import Container from "./Container.styled";

const HorizontalFlexbox = styled(Container)<{
  justifyContent: string;
  width: string;
  height: string;
  border: string;
  borderRadius: string;
  padding: string;
  margin: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || "center"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  border: ${(props) => props.border || "0"};
  border-radius: ${(props) => props.borderRadius || "0"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "auto"};
  background-color: ${(props) => props.theme.backgroundColors.main};
`;

export default HorizontalFlexbox;
