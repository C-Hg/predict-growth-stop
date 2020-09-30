import styled from "styled-components";

import device from "../../styles/medias";
import { GRID_HEIGHT, GRID_HEIGHT_MOBILE } from "../constants";

const LegendContainer: React.FC = styled.div`
  display: flex;
  align-items: safe center;
  justify-content: safe center;

  margin: auto;
  background-color: ${(props) => props.theme.backgroundColors.card};

  ${device.mobile} {
    height: ${GRID_HEIGHT_MOBILE};
    flex-direction: row;
    padding-top: 10px;
    margin-bottom: 0;
  }

  ${device.mobileL} {
    height: ${GRID_HEIGHT};
    flex-direction: column;
    padding-top: 0;
    padding-left: 10px;
    margin-right: 0;
  }
`;

export default LegendContainer;
