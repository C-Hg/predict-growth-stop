import styled from "styled-components";

import device from "../../styles/medias";
import {
  ADD_DATA_HEIGHT,
  ADD_DATA_WIDTH,
  ADD_DATA_WIDTH_MOBILE,
  GRID_BORDER_RADIUS,
  GRID_HEIGHT_MOBILE,
} from "../constants";

const AddDataCell: React.FC = styled.div`
  background-color: transparent;

  border-color: ${(props) => props.theme.colors.githubGrey};
  border-style: solid;
  border-width: 2px;

  border-bottom-right-radius: ${GRID_BORDER_RADIUS};

  display: flex;
  justify-content: center;
  align-items: center;

  ${device.mobile} {
    border-top-width: 0px;
    font-size: 14px;

    height: ${GRID_HEIGHT_MOBILE};
    width: ${ADD_DATA_WIDTH_MOBILE};

    border-bottom-left-radius: ${GRID_BORDER_RADIUS};
  }

  ${device.mobileL} {
    border-left-width: 0px;
    border-top-width: 2px;

    height: ${ADD_DATA_HEIGHT};
    width: ${ADD_DATA_WIDTH};

    border-top-right-radius: ${GRID_BORDER_RADIUS};
    border-bottom-left-radius: 0px;
  }
`;

export default AddDataCell;
