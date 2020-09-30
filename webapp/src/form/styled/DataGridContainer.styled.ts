import styled from "styled-components";

import device from "../../styles/medias";

const DataGridContainer = styled.div`
  display: flex;
  margin: auto;
  overflow-x: auto;

  background-color: transparent;

  ${device.mobile} {
    flex-direction: column;
  }

  ${device.mobileL} {
    padding-right: 10px;
    flex-direction: row;
  }
`;

export default DataGridContainer;
