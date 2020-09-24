import styled from "styled-components";

import { GRID_BORDER_RADIUS } from "./constants";

interface Props {
  readonly bottomLeft?: boolean;
  readonly bottomRight?: boolean;
  readonly centered?: boolean;
  readonly top?: boolean;
  readonly topLeft?: boolean;
  readonly topRight?: boolean;
  readonly padding?: string;
}

const StyledInput = styled.input<Props>`
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColors.main};
  border-bottom-left-radius: ${(props) =>
    props.bottomLeft ? GRID_BORDER_RADIUS : "0px"};
  border-bottom-right-radius: ${(props) =>
    props.bottomRight ? GRID_BORDER_RADIUS : "0px"};
  border-color: ${(props) => props.theme.colors.githubGrey};
  border-style: solid;
  border-width: 2px;

  border-top-left-radius: ${(props) =>
    props.topLeft ? GRID_BORDER_RADIUS : "0px"};
  border-top-right-radius: ${(props) =>
    props.topRight ? GRID_BORDER_RADIUS : "0px"};
  color: ${(props) => props.theme.colors.darkGrey};
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 18px;
  justify-content: ${(props) => (props.centered ? "center" : "flex-start")};

  margin: 0px;
  margin-top: ${(props) => (props.top ? "0px" : "-2px")};
  width: 60px;
  height: 100%;
  text-align: center;
  outline: none;
  padding: 0px;
  :focus {
    border-color: ${(props) => props.theme.colors.lightBlue};
    z-index: 10;
  }
`;

export default StyledInput;
