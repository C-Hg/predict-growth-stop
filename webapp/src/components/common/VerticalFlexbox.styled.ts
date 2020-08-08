import styled from "styled-components";

import Container from "./Container.styled";

const VerticalFlexbox: React.FC = styled(Container)<{
  alignItems: string;
  justifyContent: string;
  margin: string;
  width: string;
  height: string;
  border: string;
  borderRadius: string;
  padding: string;
}>`
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
