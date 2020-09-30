import styled from "styled-components";

import device from "../../styles/medias";

const DataGridContainer = styled.div`
  display: flex;
  margin: auto;
  overflow-x: auto;
  padding-right: 10px;
  background-color: ${(props) => props.theme.backgroundColors.main};

  ${device.mobile} {
    flex-direction: column;
  }

  ${device.mobileL} {
    flex-direction: row;
  }
`;

export default DataGridContainer;
