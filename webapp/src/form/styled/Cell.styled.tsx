import styled from "styled-components";

import device from "../../styles/medias";
import {
  GRID_BORDER_RADIUS,
  LEGEND_WIDTH,
  LEGEND_WIDTH_MOBILE,
} from "../constants";

interface Props {
  readonly bottomLeft?: boolean;
  readonly bottomRight?: boolean;
  readonly centered?: boolean;
  readonly top?: boolean;
  readonly topLeft?: boolean;
  readonly topRight?: boolean;
}

const StyledCell: React.FC<Props> = styled.div<Props>`
  background-color: ${(props) => props.theme.backgroundColors.card};

  border-color: ${(props) => props.theme.colors.githubGrey};
  border-style: solid;
  border-width: 2px;

  border-top-left-radius: ${(props) =>
    props.topLeft ? GRID_BORDER_RADIUS : "0px"};

  color: ${(props) => props.theme.colors.darkGrey};
  font-family: ${(props) => props.theme.fonts.main};

  display: flex;
  justify-content: center;

  height: 100%;

  ${device.mobile} {
    align-items: center;
    font-size: 14px;
    text-align: center;

    flex-direction: row;

    width: ${LEGEND_WIDTH_MOBILE};
    border-bottom-right-radius: ${(props) =>
      props.bottomRight ? GRID_BORDER_RADIUS : "0px"};
    border-top-right-radius: ${(props) =>
      props.bottomLeft ? GRID_BORDER_RADIUS : "0px"};
    border-right-width: ${(props) => (props.bottomLeft ? "2px" : "0px")};

    border-bottom-width: 0px;
  }

  ${device.mobileL} {
    align-items: flex-start;
    flex-direction: column;
    width: ${LEGEND_WIDTH};

    border-bottom-left-radius: ${(props) =>
      props.bottomLeft ? GRID_BORDER_RADIUS : "0px"};
    border-bottom-right-radius: ${(props) =>
      props.bottomRight ? GRID_BORDER_RADIUS : "0px"};
    border-top-right-radius: ${(props) =>
      props.topRight ? GRID_BORDER_RADIUS : "0px"};
    border-right-width: 0px;
    border-bottom-width: 2px;

    margin-top: ${(props) => (props.top ? "0px" : "-2px")};

    padding-left: 10px;
    text-align: left;
  }

  ${device.desktop} {
    font-size: 16px;
  }
`;

export default StyledCell;
