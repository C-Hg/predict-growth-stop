import styled, { StyledComponent } from "styled-components";

import Container from "./Container.styled";

interface VerticalFlexboxProps {
  readonly alignItems?: string;
  readonly justifyContent?: string;
  readonly margin?: string;
  readonly width?: string;
  readonly height?: string;
  readonly border?: string;
  readonly borderRadius?: string;
  readonly padding?: string;
}

const VerticalFlexbox: React.FC<VerticalFlexboxProps> = styled(Container)<
  VerticalFlexboxProps
>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  margin: ${(props) => props.margin || "auto"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  border: ${(props) => props.border || "0"};
  border-radius: ${(props) => props.borderRadius || "0"};
  padding: ${(props) => props.padding || "0"};
  background-color: ${(props) => props.theme.backgroundColors.main};
`;

export default VerticalFlexbox;