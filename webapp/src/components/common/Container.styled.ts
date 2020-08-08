import styled from "styled-components";

const Container: React.FC = styled.div<{
  width: string;
  height: string;
  margin: string;
  padding: string;
}>`
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.darkGrey};
  background-color: ${(props) => props.theme.backgroundColors.main};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  margin: ${(props) => props.margin || "0 auto 0 auto"};
  padding: ${(props) => props.padding || "0"};
`;

export default Container;
