import styled, { Theme } from "styled-components";

const H1: React.FC = styled.p<{
  color: string;
  theme: Theme;
}>`
  color: ${(props) => props.color || props.theme.colors.darkGrey};
  font-family: ${(props) => props.theme.fonts.main};
  margin: "30px 0 0 0";
  padding: 0;
  text-align: center;
  font-weight: 600;
  font-size: 36px;
`;

export default H1;
