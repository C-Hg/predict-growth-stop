import styled from "styled-components";

import device from "../../styles/medias";
import { GRID_HEIGHT } from "../constants";

const DataColumnsContainer: React.FC = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: auto;

  background-color: ${(props) => props.theme.backgroundColors.main};

  ${device.mobile} {
    flex-direction: column;
    margin-top: 0;
  }

  ${device.mobileL} {
    height: ${GRID_HEIGHT};
    flex-direction: row;
    margin-left: 0;
  }
`;

export default DataColumnsContainer;
