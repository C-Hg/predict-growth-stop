import styled from "styled-components";

import device from "../../styles/medias";
import { DATA_WIDTH, DATA_WIDTH_MOBILE } from "../constants";

const DataColumnContainer: React.FC = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  width: ${DATA_WIDTH};
  min-width: ${DATA_WIDTH};

  ${device.mobile} {
    flex-direction: row;
    width: ${DATA_WIDTH_MOBILE};
    min-width: ${DATA_WIDTH_MOBILE};
  }

  ${device.mobileL} {
    flex-direction: column;
    width: ${DATA_WIDTH};
    min-width: ${DATA_WIDTH};
  }
`;

export default DataColumnContainer;
