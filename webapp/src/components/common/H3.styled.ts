import styled from "styled-components";

interface Props {
  readonly bold?: boolean;
  readonly margin?: string;
}

const H3 = styled.p<Props>`
  color: ${(props) => props.color || props.theme.colors.darkGrey};
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: ${(props) => (props.bold ? 600 : 400)};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  padding: 0;
  text-align: "center";
  font-size: 18px;
  background-color: "transparent";
`;

export default H3;
