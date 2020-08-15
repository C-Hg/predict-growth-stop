import styled from "styled-components";

interface Props {
  readonly bottomLeft?: boolean;
  readonly bottomRight?: boolean;
  readonly centered?: boolean;
  readonly top?: boolean;
  readonly topLeft?: boolean;
  readonly topRight?: boolean;
}

const BORDER_RADIUS = "12px";

const StyledCell: React.FC<Props> = styled.div<Props>`
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColors.main};
  border-bottom-left-radius: ${(props) =>
    props.bottomLeft ? BORDER_RADIUS : "0px"};
  border-bottom-right-radius: ${(props) =>
    props.bottomRight ? BORDER_RADIUS : "0px"};
  border-color: ${(props) => props.theme.colors.darkGrey};
  border-style: solid;
  border-width: 2px;
  border-top-width: ${(props) => (props.top ? "2px" : "0px")};
  border-top-left-radius: ${(props) => (props.topLeft ? BORDER_RADIUS : "0px")};
  border-top-right-radius: ${(props) =>
    props.topRight ? BORDER_RADIUS : "0px"};
  color: ${(props) => props.theme.colors.darkGrey};
  display: flex;
  flex: 1;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 18px;
  height: 100%;
  justify-content: ${(props) => (props.centered ? "center" : "flex-start")};
  margin-bottom: -2px;
  margin: 0;
  padding: 10px;
  text-align: left;
  width: 100%;
`;

export default StyledCell;
