import styled from "styled-components";

import device from "../styles/medias";

const ResultContainer = styled.div`
  margin: "";
  background-color: transparent;
  text-align: center;

  ${device.mobile} {
    padding-left: 5px;
    padding-right: 5px;
  }

  ${device.desktop} {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export default ResultContainer;
