import styled from "styled-components";

interface Props {
  readonly justifyContent?: string;
  readonly margin?: string;
  readonly width?: string;
  readonly height?: string;
  readonly border?: string;
  readonly borderRadius?: string;
  readonly padding?: string;
  readonly overflow?: string;
}

const HorizontalFlexbox = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: safe center;
  justify-content: ${(props) => props.justifyContent || "safe center"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border: ${(props) => props.border || "0"};
  border-radius: ${(props) => props.borderRadius || "0"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "auto"};
  overflow-x: ${(props) => props.overflow || ""};
  background-color: transparent;
`;

export default HorizontalFlexbox;
