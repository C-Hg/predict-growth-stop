import styled, { Theme } from "styled-components";

const H2: React.FC = styled.p<{ theme: Theme }>`
  color: ${(props) => props.color || props.theme.colors.darkGrey};
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: 600;
  margin: 0;
  padding: 0;
  text-align: "center";
  font-size: 22px;
  background-color: "transparent";
`;

export default H2;
