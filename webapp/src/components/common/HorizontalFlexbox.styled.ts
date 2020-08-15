import styled from "styled-components";

import Container from "./Container.styled";

interface Props {
  readonly justifyContent?: string;
  readonly margin?: string;
  readonly width?: string;
  readonly height?: string;
  readonly border?: string;
  readonly borderRadius?: string;
  readonly padding?: string;
}

const HorizontalFlexbox = styled(Container)<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || "center"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border: ${(props) => props.border || "0"};
  border-radius: ${(props) => props.borderRadius || "0"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "auto"};
  background-color: ${(props) => props.theme.backgroundColors.main};
`;

export default HorizontalFlexbox;
