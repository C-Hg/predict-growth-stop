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

const StyledCell: React.FC<Props> = styled.div<Props>`
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
  display: flex;
  flex: 1;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 18px;
  height: 100%;
  justify-content: ${(props) => (props.centered ? "center" : "flex-start")};
  margin: 0px;
  margin-top: ${(props) => (props.top ? "0px" : "-2px")};
  padding: ${(props) => props.padding || "0px"};
  text-align: left;
  width: 100%;
`;

export default StyledCell;